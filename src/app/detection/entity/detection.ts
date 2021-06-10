import { DetectionData } from './detection.types';

export class Detection implements DetectionData {
    mjd: number;
    candid: string;
    fid: number;
    pid: number;
    diffmaglim: number;
    isdiffpos: number;
    nid: number;
    distnr: number;
    magpsf: number;
    magpsf_corr: number;
    magpsf_corr_ext: null;
    magap: number;
    magap_corr: number | null;
    sigmapsf: number;
    sigmapsf_corr: number;
    sigmapsf_corr_ext: number;
    sigmagap: number;
    sigmagap_corr: number | null;
    ra: number;
    dec: number;
    rb: number;
    rbversion: string;
    drb: number | null;
    magapbig: number;
    sigmagapbig: number;
    rfid: number | null;
    has_stamp: boolean;
    corrected: boolean;
    dubious: boolean;
    candid_alert: null;
    step_id_corr: string;
    phase: null;
    parent_candid: number;

    constructor(data: DetectionData) {
        this.mjd = data.mjd
        this.candid = data.candid
        this.fid = data.fid
        this.pid = data.pid
        this.diffmaglim = data.diffmaglim
        this.isdiffpos = data.isdiffpos
        this.nid = data.nid
        this.distnr = data.distnr
        this.magpsf = data.magpsf
        this.magpsf_corr = data.magpsf_corr
        this.magap = data.magap
        this.magap_corr = data.magap_corr
        this.sigmapsf = data.sigmapsf
        this.sigmapsf_corr = data.sigmapsf_corr
        this.sigmapsf_corr_ext = data.sigmapsf_corr_ext
        this.sigmagap = data.sigmagap
        this.sigmagap_corr = data.sigmagap_corr
        this.ra = data.ra
        this.dec = data.dec
        this.rb = data.rb
        this.rbversion = data.rbversion
        this.drb = data.drb
        this.magapbig = data.magapbig
        this.sigmagapbig = data.sigmagapbig
        this.rfid = data.rfid
        this.has_stamp = data.has_stamp
        this.corrected = data.corrected
        this.dubious = data.dubious
        this.step_id_corr = data.step_id_corr
        this.parent_candid = data.parent_candid
        this.phase = data.phase
    }
}
