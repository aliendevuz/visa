

export default function Nav1() {
    return (
        <div className="d-f w-100p mb-30px bc-w jc-sb ai-c">
            <div className="logo d-f g-20px ai-c">
                <img src="" alt="logo" />
                <h2>RouteX</h2>
            </div>
            <div className="menus">
                <nav>
                    <ul className="d-f g-30px lst-n fw-6 fs-09r">
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>SERVICES</li>
                        <li>PROJECTS</li>
                        <li>BLOG</li>
                        <li>PAGE</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
            <button className="bc-l b-0 pb-15px pi-20px br-50px">Get An Appointment →</button>
        </div>
    );
}