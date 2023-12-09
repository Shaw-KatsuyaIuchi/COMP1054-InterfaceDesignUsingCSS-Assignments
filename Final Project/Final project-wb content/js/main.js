// Header
document.addEventListener('DOMContentLoaded', function () {
  // Header content
  const headerContent = `
    <div class="shop-logo">
      <a href="index.html"><img src="../img/shop_logo.png" alt="Shop-Logo"></a>
    </div>

    <nav id="navi">
      <ul class="nav-menu">
        <li><a href="../index.html">TOP</a></li>
        <li><a href="../index.html#feature">FEATURE</a></li>
        <li><a href="../aboutus.html">ABOUT US</a></li>
        <li><a href="../store.html">ONLINE STORE</a></li>
        <li><a href="../contact.html">CONTACT</a></li>
      </ul>
    </nav>

    <div class="toggle_btn">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="mask"></div>
  `;

  // Insert header content into the header element
  document.getElementById('header').innerHTML = headerContent;
});

// Footer
document.addEventListener('DOMContentLoaded', function () {
  // Footer content
  const footerContent = `
    <h2 class="sec-title">CONTACT</h2>
    <div class="content">
      <div class="contact-info">
        <p>MochiMellow</p>
        <p>
          ADDRESS: 1 Georgian Dr, Barrie, ON L4M 3X9
        </p>
        <p>
          PHONE NUMBER: +17057281968
        </p>
      </div>

      <div class="contact-form">
        <form action="#">
          <dl>
            <dt><label for="name">Name:</label></dt>
            <dd><input type="text" id="name" name="your-name"></dd>
            <dt><label for="email">Mail:</label></dt>
            <dd><input type="email" id="email" name="your-email"></dd>
            <dt><label for="message">Message:</label></dt>
            <dd><textarea id="message" name="your-message"></textarea></dd>
          </dl>
          <div class="button"><input type="submit" value="SEND"></div>
        </form>
      </div>
    </div>
  `;

  // Insert footer content into the footer element
  document.getElementById('contact').innerHTML = footerContent;
});

//Control humberger menu
$(function() {
  // Click event for the hamburger menu
  $('.toggle_btn').on('click', function() {
    // Toggle the 'open' class on the header
    $('#header').toggleClass('open');
  });

  // Close the menu when clicking on the mask area
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });

  // Close the menu when clicking on a link
  $('#navi a').on('click', function() {
    $('#header').removeClass('open');
  });
});
