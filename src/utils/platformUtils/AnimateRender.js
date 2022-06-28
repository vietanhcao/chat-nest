import { AnimateShowChangeCellRenderer, Utils } from "ag-grid-community";
import { FIELD } from "./types";

export default class AnimateRender extends AnimateShowChangeCellRenderer {
  ARROW_UP = "\u2191";
  ARROW_DOWN = "\u2193";

  refresh(params) {
    // Color of field Position
    if (params.colDef.field === FIELD.openPositions) {
      if (params.value > 0) {
        this.eValue.classList.add("price-up");
      } else if (params.value < 0) {
        this.eValue.classList.add("price-down");
      }
    } else {
      if (params.value > params.data[FIELD.openPrice]) {
        this.eValue.classList.add("price-up");
      } else if (params.value < params.data[FIELD.openPrice]) {
        this.eValue.classList.add("price-down");
      }
    }

    if (typeof this.lastValue !== "undefined") {
      if (params.colDef.field === FIELD.openPositions) {
        if (params.value >= 0) {
          this.eValue.classList.remove("price-down");
          this.eValue.classList.add("ag-value-change-value-highlight-up");
        } else {
          this.eValue.classList.remove("price-up");
          this.eValue.classList.add("ag-value-change-value-highlight-down");
        }
      } else {
        this.showDelta(params);
        if (params.value > params.data[FIELD.openPrice]) {
          this.eValue.classList.remove("price-down");
          this.eValue.classList.add("ag-value-change-value-highlight-up");
        } else if (params.value < params.data[FIELD.openPrice]) {
          this.eValue.classList.remove("price-up");
          this.eValue.classList.add("ag-value-change-value-highlight-down");
        }
      }
    }

    super.refresh(params);
  }

  setTimerToRemoveDelta = () => {
    this.refreshCount++;
    let refreshCountCopy = this.refreshCount;
    setTimeout(() => {
      if (refreshCountCopy === this.refreshCount) {
        this.hideDeltaValue();
      }
    }, 500);
  };

  hideDeltaValue = () => {
    super.hideDeltaValue();

    this.eValue.classList.remove("ag-value-change-value-highlight-up");
    this.eValue.classList.remove("ag-value-change-value-highlight-down");
  };

  showDelta = (params, delta) => {
    if (params.colDef.field === FIELD.openPositions) {
    } else {
      if (params.value && params.value !== params.data[FIELD.openPrice]) {
        let isUp = params.value > params.data[FIELD.openPrice];
        this.eDelta.innerHTML = isUp ? this.ARROW_UP : this.ARROW_DOWN;
        Utils.addOrRemoveCssClass(
          this.eDelta,
          "ag-value-change-delta-up",
          isUp
        );
        Utils.addOrRemoveCssClass(
          this.eDelta,
          "ag-value-change-delta-down",
          !isUp
        );
      }
    }
  };
}
