import { useState } from "react";
import { Box, Checkbox, Flex, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import Header from "../components/Header";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" mx="auto">
      <Header />
      <Flex>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} />
      </Flex>
      <Stack mt={8}>
        {todos.map((todo, index) => (
          <Flex key={index} alignItems="center">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} mr={4} />
            <Text textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Text>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
