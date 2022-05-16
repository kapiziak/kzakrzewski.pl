import React, { FC, useState } from "react";

const availableEmojis = ["😄", "🤔", "🤓", "🧐", "🤖", "🎃", "💻", "🖥️", "⌨️"];

const EmojiSpinner: FC = () => {
  const [emojis, setEmojis] = useState<string>(
    availableEmojis[Math.floor(Math.random() * availableEmojis.length)]
  );

  const handleMouseAction: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setEmojis(availableEmojis[Math.floor(Math.random() * availableEmojis.length)])
  };

  return <div onMouseOver={handleMouseAction} onClick={handleMouseAction} style={{cursor: "pointer"}}>{emojis}</div>;
};

export default EmojiSpinner;