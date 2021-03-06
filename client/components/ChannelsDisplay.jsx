/**
 * ************************************
 *
 * @module  ChannelsDisplay
 * @author joe, mark
 * @date 11/16.
 * @description presentation component that renders in ChannelContainer
 *
 * ************************************
 */

import React from "react";
import OneChannel from "./OneChannel.jsx";

const ChannelsDisplay = (props) => {
    
    const displayArr = [];
    for(let i = 0; i < props.channelList.length; i++){
        let highlight = 'unhighlighted';
        // console.log(props.selectedChannel === props.channelList[i].name)
        if(props.selectedChannel === props.channelList[i].name){
            highlight = 'highlighted'
        }

        displayArr.push(<OneChannel
        selectChannel = {props.selectChannel}
        name={props.channelList[i].name}
        highlight = {highlight}
        key={`channel${i}`}
        />)
    }

    return (
        <div className = "channel">
          <div className = "channelLabel">
            <h2>Channels</h2>
          </div>
          {displayArr}
        </div>
    )
}

export default ChannelsDisplay;