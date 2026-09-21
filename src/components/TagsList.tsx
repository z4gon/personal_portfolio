import Tag from "./Tag";
import styles from "./TagsList.module.scss";

interface TagsListProps {
  tags: string[];
  secondary?: boolean;
  dark?: boolean;
}

const TagsList = ({ tags, secondary = false, dark = false }: TagsListProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag} secondary={secondary} dark={dark}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagsList;
