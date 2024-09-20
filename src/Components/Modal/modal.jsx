
function Modal({ isOpen, setFecharModal }) {

    if (isOpen) {
        return (
            <div className="fixed top-0 left-0 z-50 flex items-center gap-4 pl-5 bg-dark-300" onClick={setFecharModal}>
                <div className="fixed top-0 left-0 w-full bg-dark-300 px-5 py-5 ">
                    <div className="flex gap-7 pl-4">
                        <a href="#">About</a>
                        <a href="#">Experience</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        );

    } 

}

export default Modal;