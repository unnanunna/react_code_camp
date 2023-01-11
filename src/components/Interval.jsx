import React from "react";


const useInterval = ({ levels, setLevels }) => {
    const [level, setLevel] = React.useState(levels);

    React.useEffect (() => {
        const interval = setInterval(() => {

            if (level > 0) {
                setLevel(level => level - 2);
            }

        }, 3000)
        return () => clearInterval(interval);
    }, [level]);
    
    return (
        <div>
            {level}
        </div>
    )
}

export default useInterval;