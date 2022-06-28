import { Button, Divider, Input, Skeleton } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axiosClient from 'src/api/axiosClient';
import { useAppSelector } from 'src/app/hooks';
import { selectAccessToken } from 'src/features/auth/authSlice';
import {
  disconnectSocketAuth,
  emitSendMessage,
  initiateSocketConnection,
  listenToMessages,
} from 'src/socketio.service';
import { selectAuthEmail } from '../../features/auth/authSlice';
import './Dashboard.scss';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [penddingData, setPenddingData] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [lastId, setLastId] = useState('');
  const [totals, setTotals] = useState(0);
  const infiniteScrollRef = useRef<any>(null);
  const positionScroll = useRef<number>(0);
  const history = useHistory();

  const accessToken = useAppSelector(selectAccessToken);
  const email = useAppSelector(selectAuthEmail);

  // socket
  useEffect(() => {
    initiateSocketConnection('', accessToken);
    listenToMessages((newMessage: any) => {
      // check position to add new message
      if (positionScroll.current > -200) {
        setData((prev) => [newMessage, ...prev]);
      } else {
        setPenddingData((prev) => [newMessage, ...prev]);
      }

      if (email === newMessage?.author?.email) {
        infiniteScrollRef.current.el?.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    });
    return () => {
      disconnectSocketAuth();
    };
  }, []);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const chatData = await axiosClient.get<any, Promise<{ data: any[]; pagination: { totalRows: number } }>>(
        `/api/chat?limit=10&createdAt[sort]=desc&id_lt=${lastId}`
      );
      const lastMessage: any = chatData.data[chatData.data.length - 1];
      lastMessage && setLastId(lastMessage?._id);
      setData((prev) => [...prev, ...chatData.data]);
      setTotals(chatData.pagination.totalRows);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    try {
      if (!input) return;
      emitSendMessage(input);
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
      <button onClick={() => history.push('/upload')}>Go to upload page</button>
      <button onClick={() => history.push('/posts')}>Go to Post page</button>
      <div
        className="chat-container"
        id="scrollableDiv"
        style={{
          height: 'calc(100vh - 120px)',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          ref={infiniteScrollRef}
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < totals}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          inverse
          onScroll={() => {
            if (positionScroll.current > -200 && penddingData.length) {
              setData((prev) => [...penddingData, ...prev]);
              setPenddingData([]);
            }
            if (infiniteScrollRef?.current?.el?.scrollTop) {
              positionScroll.current = infiniteScrollRef?.current?.el?.scrollTop;
            }
          }}
        >
          {data.map((item: any, index) => (
            <div style={{ marginBottom: 12 }} key={index}>
              <div style={email === item?.author.email ? { textAlign: 'right' } : {}}>{item.author?.email}</div>
              <div
                className="message__content"
                style={email === item?.author.email ? { marginLeft: 'auto', background: 'rgb(0, 132, 255)' } : {}}
              >
                {item.content}
              </div>
              <div style={email === item?.author.email ? { textAlign: 'right' } : {}}>
                {moment(item.updatedAt).fromNow()}
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
      <Input.Group compact style={{ display: 'flex' }}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <Button onClick={handleSubmit} type="primary">
          Gửi
        </Button>
      </Input.Group>
    </>
  );
};

export default Dashboard;
