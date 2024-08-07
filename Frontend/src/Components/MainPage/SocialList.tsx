import React from "react";

interface SocialListProps {
  className?: string;
}

const SocialList = ({ className }: SocialListProps) => {
  return (
    <ul role="list" className={`social-list padding-block-300 ${className}`}>
      <a href="">
        <li>
          <img src="/icons/community/twitter.svg" alt="twitter" />
        </li>
      </a>
      <a href="">
        <li>
          <img src="/icons/community/discord.svg" alt="discord" />
        </li>
      </a>
      <a href="">
        <li>
          <img src="/icons/community/instagram.svg" alt="instagram" />
        </li>
      </a>
    </ul>
  );
};

export default SocialList;
