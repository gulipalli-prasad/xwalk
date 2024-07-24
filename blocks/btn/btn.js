export default function decorate(block) {
  // Create the initial structure with form and table area
  block.innerHTML = `
    <div class="arena-style">
      <div class="container">
        <ul class="cd_breadcrumb">
          <li>
            <a href="javascript:void(0)">
              <img src="images/home-icon.webp" alt="Home">
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" class="back-icon">
              Back
            </a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h2 class="dealer-page-title">
              New Finance Journey
            </h2>
          </div>
        </div>
        <div class="grey-bg">
          <form class="cd_form" id="filter_form" novalidate="novalidate">
            <div class="row">
              <div class="col-xs-6 col-md-3 form-group">
                <input type="text" class="form-control mobileNumber" name="mobileNumber" maxlength="10" placeholder="Mobile No." id="mobileNumber" tabindex="1">
                <em id="mobileNumber-error" class="error invalid-feedback">Please enter valid Number</em>
              </div>
              <div class="col-xs-6 col-md-3 form-group">
                <input type="text" class="form-control" placeholder="Booking ID" id="bookingID" tabindex="2">
              </div>
              <div class="col-xs-6 col-md-3 form-group">
                <input type="text" class="form-control" placeholder="DMS Enquiry" id="enquiryId" tabindex="3">
              </div>
              <div class="col-xs-6 col-md-3 form-group btn-group">
                <button type="button" class="btn btn--primary-solid btn-dealer" id="dealer_filter_search">
                  Search
                </button>
                <button type="button" class="btn btn--primary-solid btn-dealer" id="clear_all">
                  Clear All
                </button>
              </div>
            </div>
          </form>
        </div>
        <div id="search_results" style="display: none;">
          <!-- Search results will be inserted here -->
        </div>
      </div>
    </div>
    <div class="popUpmain" id="popup">
      <div class="modal-content">
        <div class="close" id="close-popup">
          <img src="images/cross-form.webp" alt="cross form">
        </div>
        <div class="popupContent red">
          <h2><img src="images/error-icon.webp" alt="error icon"> Error</h2>
          <p>Please Enter at least one field</p>
          <div class="blackButton"><button type="button" data-dismiss="modal" class="submitcibil" value="OK">OK</button></div>
        </div>
      </div>
    </div>
  `;
  // Add event listeners
  const searchButton = block.querySelector("#dealer_filter_search");
  const closePopup = block.querySelector("#close-popup");
  const popup = block.querySelector("#popup");
  const mobileNumber = block.querySelector("#mobileNumber");
  const bookingID = block.querySelector("#bookingID");
  const enquiryId = block.querySelector("#enquiryId");
  const clearAllButton = block.querySelector("#clear_all");
  const searchResults = block.querySelector("#search_results");
  searchButton.addEventListener("click", function () {
    if (!mobileNumber.value && !bookingID.value && !enquiryId.value) {
      popup.classList.add("fade-in");
      popup.style.display = "flex";
    } else {
      // Perform search operation here
      console.log("Searching...");
      // Simulating API call with setTimeout
      setTimeout(() => {
        const results = getSearchResults();
        displaySearchResults(results);
      }, 500);
    }
  });

  closePopup.addEventListener("click", function () {
    popup.classList.remove("fade-in");
    popup.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });

  // Input validation
  mobileNumber.addEventListener("keypress", function (event) {
    return event.charCode >= 48 && event.charCode <= 57;
  });

  [bookingID, enquiryId].forEach(function (input) {
    input.addEventListener("keypress", function (event) {
      return (
        (event.charCode >= 97 && event.charCode <= 122) ||
        (event.charCode >= 65 && event.charCode <= 90) ||
        (event.charCode >= 48 && event.charCode <= 57)
      );
    });
  });

  clearAllButton.addEventListener("click", function () {
    mobileNumber.value = "";
    bookingID.value = "";
    enquiryId.value = "";
    searchResults.style.display = "none";
  });

  function getSearchResults() {
    // This function would typically make an API call
    // For now, we'll return mock data
    return [
      {
        dmsEnquiry: "ENQ24004549",
        userName: "V",
        phoneNo: "9650430280",
        model: "INVICTO",
        variant: "MARUTI INVICTO IE STRONG HYBRID ALPHA+ 2L CVT 7STR",
        enquiryCreationDate: "15-07-2024",
        createdBy: "null",
        status: "Not Applied",
        referenceId: "null",
      },

      // Add more mock data as needed
    ];
  }

  function displaySearchResults(data) {
    searchResults.innerHTML = `
      <div class="row">
        <div class="col-sm-12">
          <div class="search_table_listings">
            <div class="table-responsive">
              <table class="table table-bordered pagination1 table-hover" id="example">
                <thead>
                  <tr>
                    <th>S. No.</th>
                    <th>DMS Enquiry</th>
                    <th>User name</th>
                    <th>Phone No.</th>
                    <th>Model</th>
                    <th>Variant</th>
                    <th>Enquiry Creation Date</th>
                    <th>Created By</th>
                    <th>Status</th>
                    <th>Reference Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="myTable">
                  ${data
                    .map(
                      (row, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${row.dmsEnquiry}</td>
                      <td>${row.userName}</td>
                      <td><span>${row.phoneNo}</span></td>
                      <td>${row.model}</td>
                      <td>${row.variant}</td>
                      <td>${row.enquiryCreationDate}</td>
                      <td>${row.createdBy}</td>
                      <td>${row.status}</td>
                      <td>${row.referenceId}</td>
                      <td><button type="button" class="btn btn-dealer btn--primary-solid launch_deal_btn">Launch Finance</button></td>
                    </tr>
                  `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-sm-6">
              <p class="result-count">${data.length} Total</p>
            </div>
            <div class="col-sm-6">
              <ul class="pagination" id="myPager">
                <!-- Pagination will be dynamically added here if needed -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
    searchResults.style.display = "block";
  }
}
