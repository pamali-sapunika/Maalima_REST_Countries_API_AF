import { Select } from "@chakra-ui/react";

const LanguageFilter = ({ onSelectLanguage }) => {
  return (
    <Select placeholder="Filter by language" onChange={(e) => onSelectLanguage(e.target.value)} my={4}>
      <option value="eng">English</option> {/* Updated to 'eng' */}
      <option value="fra">French</option>
      <option value="spa">Spanish</option>
      <option value="deu">German</option>
      <option value="zho">Chinese</option>
      <option value="ara">Arabic</option>
      <option value="rus">Russian</option>
      <option value="hin">Hindi</option>
      <option value="por">Portuguese</option>
      <option value="jpn">Japanese</option>
    </Select>
  );
};

export default LanguageFilter;
