function MobileBar() {
    return(
        <div class="mobile-bar">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="images/logo.png" />
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}
function DesktopBar() {
    return(
        <div class="desktop-bar">
                <div>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="vert-division"></div>
                    <img src="images/logo.png" />
                </div>
                <input type="text" placeholder="Pesquisar" />
                <div>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
    );
}


export default function TopBar() {
    return (
        <div class="top-bar">
            <MobileBar />
            <DesktopBar />
        </div>
    );
}