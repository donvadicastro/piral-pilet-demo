import * as React from "react";

export const Tile: React.FC<any> = () => {
  return (
    <div
      className="SplitPane qa-split-pane_vertical vertical disabled"
      style={{
        display: "flex",
        height: "100%",
        outline: "none",
        overflow: "hidden",
        "flex-direction": "row",
        left: "0px",
        right: "0px",
      }}
    >
      <div
        className="Pane vertical Pane2"
        style={{
          flex: "0 0 auto",
          position: "relative",
          outline: "none",
          width: "30%",
        }}
      >
        <div
          className="c-layout js-portal-custom-widget"
          id="pane_content_9d7d0f0d-619d-4adf-2216-059218d164a5"
          data-layout-id="9d7d0f0d-619d-4adf-2216-059218d164a5"
        >
          <div className="card-header">
            <h2 className="my-0 font-weight-normal">CDS statistics</h2>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                <strong>243</strong> users registered
              </li>
              <li>
                <strong>152</strong> users active now
              </li>
              <li>
                <strong>12</strong> admins registered with tenant
              </li>
            </ul>
            <button type="button" className="b9hCATB1tuwEFW3OgbILR">
              Manage users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
