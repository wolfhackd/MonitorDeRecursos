const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

function getSystemInfo() {
    const system = os.platform();
    const arch = os.arch();
    const cpuModel = os.cpus[0].model;
    const upTime = os.uptime();


    return {system, arch, cpuModel, upTime}
}

function showLog({system, arch, cpuModel, upTime}) {
    console.clear();
    console.log('DETALHES DO SISTEMA');
    console.log("Sistema Operacional: ", system);
    console.log("Arquitetura: ",arch);
    console.log("Modelo do processador: ", cpuModel);
    console.log(`Tempo de Atividade do Sistema: --:--:--:--`);
    console.log(`Uso de Memória RAM: xx GB / -- GB (XX %)`);
}

showLog(getSystemInfo());

/* 
DETALHES DO SISTEMA 
Sistema Operacional: Windowns
Arquitetura: x64
Modelo do Processador: -----------------------
Tempo de Atividade do Sistema: --:--:--:--
Uso de Memória RAM: xx GB / -- GB (xx %)
*/