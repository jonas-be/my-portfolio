import React, {useEffect, useState} from 'react';
import {MonitorUrlsResponse} from "../api/monitor-urls";
import {SingleMonitorResponse} from "../api/single-monitor";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";


const Monitor = () => {

    const [monitorData, setMonitorData] = useState<SingleMonitorResponse[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/monitor-urls")
            const data: MonitorUrlsResponse = await response.json()
            let tmpMonitorData = monitorData
            for (var url of data.monitorUrls) {
                const res = await fetch(url)
                const data: SingleMonitorResponse = await res.json()
                const sameName = monitorData.filter(i => i.name === data.name)
                if (sameName.length === 0) {
                    tmpMonitorData.push(data)
                } else {
                    tmpMonitorData[tmpMonitorData.indexOf(sameName[0])] = data
                }
            }
            setMonitorData([...tmpMonitorData])
        }

        fetchData()


    }, []);

    return (
        <div>

            <Header/>

            {monitorData.map(monitor =>
                        <div key={monitor.name} className="m-2 p-3 accent-background rounded-xl overflow-hidden">
                            <h3 className="topic text-lg p-1 flex justify-between">
                                {monitor.name}
                                <div>
                                    <span className={`align-top p-0.5 px-1 rounded-lg text-xs text-white ${statusColor(monitor.status)}`}>{monitor.status}</span>
                                </div>
                            </h3>

                            <p className="text">{monitor.uptime}</p>
                            <div className="flex overflow-y-visible">
                                {monitor.history.map(historyEntry =>
                                    <div key={historyEntry.date} className="relative w-full">
                                        <div
                                            className={`group cursor-pointer relative w-full h-2 m-0.5 rounded-b-sm bg-yellow-500 ${statusColor(historyEntry.status)} text-center text`}>
                                            <div
                                                className="opacity-0 group-hover:opacity-100 absolute z-10 pointer-events-none rounded-lg -mt-12 -ml-14 w-32 p-2 bg-black text-white text-center text-xs">
                                                {historyEntry.date} <br/>
                                                {historyEntry.status}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
            )}

            <Footer/>
        </div>
    );
};

export default Monitor;

export function statusColor(input: string): string {
    switch (input) {
        case "Operational":
            return "bg-green-500"
        case "Degraded":
            return "bg-orange-500"
        case "Maintenance":
            return "bg-blue-500"
        case "Not monitored":
            return "bg-grey-500"
        default:
            return "bg-red-500"
    }
}
