import i18n from "../i18n/index.js";
import type { Skill } from "./index.js";
const { t } = i18n.global;

export default {
  cypress : { key: 'cypress', label: t("skill.cypress"), type: 'frontend' },
  pinia : { key: 'pinia', label: t("skill.pinia"), type: 'frontend' },
  gha : { key: 'gha', label: t("skill.gha"), type: 'general' },
  tailwind : { key: 'tailwind', label: t("skill.tailwind"), type: 'frontend' },
  figma : { key: 'figma', label: t("skill.figma"), type: 'frontend' },
  php : { key: 'php', label: t("skill.php"), type: 'backend' },
  go : { key: 'go', label: t("skill.go"), type: 'backend' },
  sql : { key: 'sql', label: t("skill.sql"), type: 'backend' },
  symfony : { key: 'symfony', label: t("skill.symfony"), type: 'backend' },
  vue : { key: 'vue', label: t("skill.vue"), type: 'frontend' },
  typescript : { key: 'typescript', label: t("skill.typescript"), type: 'frontend' },
  css : { key: 'css', label: t("skill.css"), type: 'frontend' },
  unitTest : { key: 'unitTest', label: t("skill.unitTest"), type: 'frontend' },
  e2eTest : { key: 'e2eTest', label: t("skill.e2eTest"), type: 'frontend' },
  scrumEvents : { key: 'scrumEvents', label: t("skill.scrumEvents"), type: 'general' },
  english : { key: 'english', label: t("skill.english"), type: 'general' },
  german : { key: 'german', label: t("skill.german"), type: 'general' },
  french : { key: 'french', label: t("skill.french"), type: 'general' },
  gitlab : { key: 'gitlab', label: t("skill.gitlab"), type: 'general' },
  git : { key: 'git', label: t("skill.git"), type: 'general' },
  jenkins : { key: 'jenkins', label: t("skill.jenkins"), type: 'general' },
  jest : { key: 'jest', label: t("skill.jest"), type: 'frontend' },
  angular : { key: 'angular', label: t("skill.angular"), type: 'frontend' },
  github : { key: 'github', label: t("skill.github"), type: 'general' },
  phpUnit : { key: 'phpUnit', label: t("skill.phpUnit"), type: 'backend' },
  wordpress : { key: 'wordpress', label: t("skill.wordpress"), type: 'backend' },
  postgresql : { key: 'postgresql', label: t("skill.postgresql"), type: 'backend' },
  mysql : { key: 'mysql', label: t("skill.mysql"), type: 'backend' },
  soap : { key: 'soap', label: t("skill.soap"), type: 'backend' },
  java : { key: 'java', label: t("skill.java"), type: 'backend' },
  redis : { key: 'redis', label: t("skill.redis"), type: 'backend' },
  csharp : { key: 'csharp', label: t("skill.csharp"), type: 'frontend' },
  windowsForm : { key: 'windowsForm', label: t("skill.windowsForm"), type: 'frontend' },
} as {[key: string]: Skill}
