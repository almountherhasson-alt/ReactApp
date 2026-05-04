const defaultTitle = "My Button";

export default function MyButton({ label = defaultTitle, onClick, icon, className = '' }) {
    return (
        <button type="button" className={`my-button ${className}`} onClick={onClick}>
            {icon && <img src={icon} alt="" style={{ width: 16, height: 16, marginRight: 8 }} />}
            <span>{label}</span>
        </button>
    );
}