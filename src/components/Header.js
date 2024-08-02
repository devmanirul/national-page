import "./Header.css";
function Header() {
  return (
    <header className="header">
      {/* Header top */}
      <div className="header-top">
        {/* top left */}
        <div className="top-left">বাংলাদেশ জাতীয় তথ্য বাতায়ন </div>
        {/* top right */}
        <div className="top-right">২ শ্রাবণ ১৪৩১ English</div>
      </div>
      {/* top-Banner */}
      <div className="top-banner">
        {/* left */}
        <div className="left">
          <img
            src="https://bangladesh.gov.bd/themes/responsive_npf/templates/bangladesh/images/logo_bn.png"
            alt=""
            className=""
          />
        </div>
        {/* right */}
        <div className="right">
          {/* Department container */}
          <div className="department-container">
            {/* card 1 */}
            <div className="card">
              <span className="status">৫৮</span>
              <span className="title">মন্ত্রণালয় ও বিভাগ</span>
            </div>
            {/* card 2 */}
            <div className="card">
              <span className="status">৩৫৩</span>
              <span className="title">অধিদপ্তর ও অন্যান্য</span>
            </div>
            {/* card 3 */}
            <div className="card">
              <span className="status">৮</span>
              <span className="title">বিভাগ</span>
            </div>
            {/* card 4 */}
            <div className="card">
              <span className="status">৬৪</span>
              <span className="title">জেলা</span>
            </div>
            {/* card 5 */}
            <div className="card">
              <span className="status">৪৯৫</span>
              <span className="title">উপজেলা</span>
            </div>
            {/* card 6 */}
            <div className="card">
              <span className="status">৪৫৫৪</span>
              <span className="title">ইউনিয়ন</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
