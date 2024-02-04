import React, { useState, useEffect } from "react";

function Clock() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };
    }, []);

    function formatTime(){
        const hour=date.getHours();
        const minute=date.getMinutes();
        const sec=date.getSeconds();

        return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${sec < 10 ? `0${sec}` : sec}`
    }

	return (
		<div className="digital-clock">
			<div>
				<span>{formatTime()}</span>
			</div>
		</div>
	);
}

export default Clock;
