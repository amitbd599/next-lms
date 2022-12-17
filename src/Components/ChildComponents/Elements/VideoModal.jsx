import React, { useState } from "react";
import { BsPlayCircleFill, BsUnlock } from "react-icons/bs";

import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal({ item }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="modalVideo">
      <ModalVideo
        chanel="youtube"
        autoplay
        loop="1"
        isOpen={isOpen}
        videoId="10FNqoPpNbE"
        onClose={() => setOpen(false)}
      />
      <button className="block w-full" onClick={() => setOpen(true)}>
        <div className="flex items-center justify-between">
          <div className="my-2 flex items-start gap-4  py-1 text-[#77838F] duration-300 ease-in-out hover:text-[#F16126] md:items-center">
            <span>
              <BsPlayCircleFill className=" text-[25px]" />
            </span>
            <span className="text-left text-sm font-medium">{item.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm">04.54</span>
            <span>
              <BsUnlock />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default VideoModal;
