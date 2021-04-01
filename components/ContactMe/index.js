import Box from "components/Box";
import Stack from "components/Stack";
import Icon from "components/Icon";
import styles from "./contactMe.module.css";

const ContactMe = (props) => {
  const { className = "", ...rest } = props;
  const myClass = `${styles.contactMe} ${className}`;

  return (
    <Stack className={myClass} asList space="var(--s-1)" {...rest}>
      <Box className={styles.contactCard}>
        <a
          href="https://github.com/arthropodSeven"
          rel="me external"
          className="padding:0 margin:0">
          <Icon iconId="github" className="font-size:larger">
            github.com/arthropodSeven
          </Icon>
        </a>
      </Box>
      <Box className={styles.contactCard}>
        <a
          href="mailto:arthropodSeven@pm.me"
          rel="me external"
          className="u-email padding:0 margin:0">
          <Icon iconId="envelope" className="font-size:larger">
            arthropodSeven@pm.me
          </Icon>
        </a>
      </Box>
    </Stack>
  );
};

export default ContactMe;
