import React from 'react';
import { Avatar } from "@chakra-ui/avatar";
import { Tooltip } from "@chakra-ui/tooltip";
import { isLastMessage, isSameSender, isSameSenderMargin, isSameUser } from "../config/ChatLogic";
import ScrollableFeed from 'react-scrollable-feed';
import { ChatState } from "../Context/ChatProvider";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
      <ScrollableFeed>
        {messages &&
          messages.map((m, i) => (
            <div style={{ display: "flex" }} key={m._id}>
              {(isSameSender(messages, m, i, user._id) ||
                isLastMessage(messages, i, user._id)) && (
                  <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                    <Avatar mt={"15px"} mr={2} size={"sm"} cursor={"pointer"} name={m.sender.name} src={m.sender.pic} />
                  </Tooltip>
                )}
              
              {/* color for bubble: #BEE3F8 is the sender, #B9F5D0 is the receiver */}
              <span style={{ backgroundColor: `${m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"}`,
                  marginLeft: isSameSenderMargin(messages, m, i, user._id),
                  marginTop: isSameUser(messages, m, i, user._id) ? 10 : 10,
                  borderRadius: "20px",
                  padding: "10px 30px",
                  maxWidth: "75%",
                }}>
                {m.content}
              </span>
            </div>
          ))}
      </ScrollableFeed>
    );
  };


export default ScrollableChat;