const Tag = ({ label, bgColor, color }) => (
    <span className="tag" style={{ backgroundColor: bgColor, color }}>
        {label}
    </span>
);

const MoreTag = () => <Tag label="+ more" bgColor="black" color="white" />

const TagList = async () => {
    const tags = await fetch(`${process.env.URL}/api/service-tags`)
        .then(data => data.json());

    return (
        <div className="services__tagsWrapper">
            {tags.map((tag, index) => <Tag key={index} {...tag} />)}
            <MoreTag />
        </div>
    )
}

export default TagList;
