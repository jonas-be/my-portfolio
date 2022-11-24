import React, {useEffect, useState} from 'react';

const Monitor = () => {

    const [monitorHtml, setMonitorHtml] = useState("<div>EMPTY!</div>");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/monitor-urls")
            const data: { monitorUrls: string[] } = await response.json()
            let resHtml = ""
            for (var url of data.monitorUrls) {
                const res = await fetch(url)
                const html = await res.text()
                resHtml = resHtml + html.slice(1,-1).replaceAll("\\n", "")
                setMonitorHtml(resHtml)
            }
        }
        fetchData()
    }, []);

    return (
        <div dangerouslySetInnerHTML={{__html: monitorHtml}} />
    );
};

export default Monitor;
