import "./style.scss";

const LinkButton = ({ asBlock = false, ...props }) => {
    const aEl = (
        <a className="button link-button" {...props} />
    );

    return asBlock ? (
        <div className="buttonWrapper">
            {aEl}
        </div>
    ) : aEl;
}

export default LinkButton;
