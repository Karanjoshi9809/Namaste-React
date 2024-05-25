const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="flex h-16 mt-14 bg-amber-50 justify-center items-center max-[930px]:fixed max-[930px]:bottom-0 max-[930px]:w-full">
            Created By
            <i className="fa-solid fa-heart text-red-700 px-1"></i>
            <a
                href="https://www.linkedin.com/in/karan-joshi-442696276/"
                target="_blank"
                title="Karan Joshi's Linkedin Profile"
                className="font-bold px-1"
            >
                Karan Joshi
            </a>
            <i className="fa-solid fa-copyright px-1"></i>
            {year}
            <a
                href="https://github.com/Karanjoshi9809/Namaste-React"
                target="_blank"
                title="Flavor Fusion Github Repository"
                className="px-1"
            >
                <strong>
                    Flavor<span>Fusion</span>
                </strong>
            </a>
        </div>
    );
}

export default Footer