export default function GrayP({text, classes}) {
    return (
        <div className={`${classes} c-fg fw-3`}>
            <p className="fs-1r lh-30px">{text}</p>
        </div>
    );
}