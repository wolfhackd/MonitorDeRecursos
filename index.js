const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const systemPlataformMap = {
    'aix': 'AIX',
    'darwin': 'macOS',
    'linux': 'Linux',
    'openbsd': 'OpenBSD',
    'sunos': 'Solaris',
    'win32': 'Windows'
};

function getSystemInfo() {
    const system = systemPlataformMap[os.platform()];
    const arch = os.arch();
    const cpuModel = os.cpus();
    const upTimeDays = Math.floor(os.uptime() / 60 / 60 / 24);
    const daysInSeconds = upTimeDays * 24 * 60 * 60;
    const upTimeHours = Math.floor((os.uptime() - daysInSeconds) / 60 / 60);
    const hoursInSeconds = upTimeHours * 60 * 60;
    const upTimeMinutes = Math.floor((os.uptime() - daysInSeconds - hoursInSeconds) / 60);
    const minutesInSeconds = upTimeMinutes * 60;
    const upTimeSeconds = Math.floor(os.uptime() - daysInSeconds - hoursInSeconds - minutesInSeconds);
    const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const memoryPercentage = ((freeMemory / totalMemory) * 100).toFixed(2);

    return {system, arch, cpuModel, upTimeDays, upTimeHours, upTimeMinutes, upTimeSeconds, freeMemory, totalMemory, memoryPercentage};
}

function showLog({system, arch, cpuModel, upTimeDays, upTimeHours, upTimeMinutes, upTimeSeconds, freeMemory, totalMemory, memoryPercentage}) {
    console.clear();
    console.log('DETALHES DO SISTEMA');
    console.log("Sistema Operacional: ", system);
    console.log("Arquitetura: ",arch);
    console.log("Modelo do processador: ", cpuModel[0].model);
    console.log(`Tempo de Atividade do Sistema: ${upTimeDays}:${upTimeHours}:${upTimeMinutes}:${upTimeSeconds}`);
    console.log(`Uso de Memória RAM: ${freeMemory} GB / ${totalMemory} GB (${memoryPercentage} %)`);
}

setInterval(()=> {
    showLog(getSystemInfo());
},1000)