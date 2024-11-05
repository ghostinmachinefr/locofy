import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent37 ${className}`}>
      <div className="frame-child75" />
      <div className="history-header">
        <div className="history-content">
          <div className="history-title">
            <div className="leave-requests3">Leave Requests</div>
            <div className="history-filters">
              <div className="filter-options">
                <div className="all-filter3">
                  <img
                    className="all-filter-inner"
                    loading="lazy"
                    alt=""
                    src="/ellipse-235.svg"
                  />
                </div>
                <div className="all-label">
                  <div className="all3">All</div>
                </div>
                <div className="filter-buttons1">
                  <div className="filter-button-indicators" />
                </div>
                <div className="full-day3">Full Day</div>
                <div className="filter-buttons1">
                  <div className="filter-button-indicators" />
                </div>
                <div className="half-day3">Half Day</div>
                <div className="filter-buttons1">
                  <div className="filter-button-indicators" />
                </div>
                <div className="rh2">RH</div>
              </div>
            </div>
          </div>
          <div className="history-table">
            <div className="table-header">
              <div className="free-migration" />
              <div className="table-columns">
                <div className="column-labels">
                  <div className="request-id3">Request ID</div>
                  <div className="from-to3">From-To</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="asset" />
        <div className="delete-row1">
          <div className="rectangle-parent38">
            <div className="delete-label-child" />
            <div className="delete10">Delete</div>
          </div>
        </div>
        <div className="header-actions">
          <div className="delete-action">
            <div className="delete-action-child" />
            <div className="delete-button">
              <div className="delete-label">
                <div className="delete-label-child" />
                <div className="delete11">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-actions">
          <div className="guaranteed-dedicated-resources-parent">
            <div className="guaranteed-dedicated-resources" />
            <div className="delete-button">
              <div className="rectangle-parent39">
                <div className="delete-label-child" />
                <div className="delete10">Delete</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-separator">
          <div className="row-separator-child" />
        </div>
      </div>
      <div className="frame-child78" />
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
