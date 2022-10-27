import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box onClick={handleFunction} cursor="pointer" bg="#d8d8d8" py="3" _hover={{ background: "#0078ff", color: "white" }}  color="black" px={3} mb={2} borderRadius="lg" w={"100%"}>
      <Center display={"flex"} flexDirection={'column'} alignItems="start">
        <Box display={'flex'} flexDir={'row'} p='1'>
          <Center>
            <Box mr={2}>
              <Avatar mr={2} size="sm" cursor="pointer" name={user.name} src={user.pic} />
            </Box>
          </Center>
          <Box>
            <Text>{user.name}</Text>
            <Text fontSize="xs"><b>Email : </b> {user.email}</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default UserListItem;