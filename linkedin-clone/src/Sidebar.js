import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1608754482805-6f630357358b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Sophie Hickey</h2>
                <h4>Sophiehickey123@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
            </div>
        </div>
    );
}

export default Sidebar
