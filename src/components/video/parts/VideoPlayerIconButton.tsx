import { Icon, Icons } from "@/components/Icon";
import React from "react";

export interface VideoPlayerIconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: Icons;
  text?: string;
  className?: string;
}

export function VideoPlayerIconButton(props: VideoPlayerIconButtonProps) {
  return (
    <div className={props.className}>
      <button
        type="button"
        onClick={props.onClick}
        className="group pointer-events-auto p-2 text-white transition-transform duration-100 active:scale-110"
      >
        <div className="flex items-center justify-center rounded-full bg-white bg-opacity-0 p-2 transition-colors duration-100 group-hover:bg-opacity-20">
          <Icon icon={props.icon} className="text-2xl" />
          {props.text ? <span className="ml-2">{props.text}</span> : null}
        </div>
      </button>
    </div>
  );
}
