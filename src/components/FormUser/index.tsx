import { Form, FormContainer, Input, Button } from "./styles";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useHistory } from "react-router";

const FormUser = () => {
  const [name, setName] = useState<String>("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "") {
      window.alert("Empty Input!");
    }

    history.push(`user/${name}`);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <MdSearch size={20} />
        <Input placeholder="Search" onChange={(e) => setName(e.target.value)} />
        <Button>Search</Button>
      </Form>
    </FormContainer>
  );
};

export default FormUser;
