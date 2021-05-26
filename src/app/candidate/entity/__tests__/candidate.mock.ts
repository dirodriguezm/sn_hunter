import { CandidateData } from "../candidate.types";
import { Candidate } from "../candidate";

export const mockCandidatesData: CandidateData[] = [
  {
    oid: "ZTF17aaaaaal",
    ndethist: "159",
    ncovhist: 738,
    mjdstarthist: 58096.133761600126,
    mjdendhist: 58941.17771989992,
    corrected: true,
    stellar: true,
    ndet: 71,
    g_r_max: 0.9047756,
    g_r_max_corr: 0.85473585,
    g_r_mean: 0.94932175,
    g_r_mean_corr: 0.759152,
    firstmjd: 58365.475034699775,
    lastmjd: 58941.17771989992,
    deltajd: 575.7026852001436,
    meanra: 59.89900274929576,
    meandec: 50.27808571549295,
    sigmara: 0.0001531663529562885,
    sigmadec: 8.338496720951665e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.638608,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaam",
    ndethist: "201",
    ncovhist: 641,
    mjdstarthist: 58094.10457180021,
    mjdendhist: 58903.16262729978,
    corrected: true,
    stellar: true,
    ndet: 27,
    g_r_max: 1.3591805,
    g_r_max_corr: 2.366936,
    g_r_mean: 1.3026714,
    g_r_mean_corr: 2.2032235,
    firstmjd: 58441.4503008998,
    lastmjd: 58903.16262729978,
    deltajd: 461.712326399982,
    meanra: 60.27520874814817,
    meandec: 49.81178643333333,
    sigmara: 8.247759775315633e-5,
    sigmadec: 6.651041561049727e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.444176,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaan",
    ndethist: "283",
    ncovhist: 795,
    mjdstarthist: 58091.26695600012,
    mjdendhist: 58941.17771989992,
    corrected: true,
    stellar: true,
    ndet: 167,
    g_r_max: 0.5568104,
    g_r_max_corr: 0.49664247,
    g_r_mean: 0.6157417,
    g_r_mean_corr: 0.5027184,
    firstmjd: 58343.446620400064,
    lastmjd: 58941.17771989992,
    deltajd: 597.7310994998552,
    meanra: 64.33417051676645,
    meandec: 45.59425647604789,
    sigmara: 9.473548504603022e-5,
    sigmadec: 7.851658117390297e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.509888,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaao",
    ndethist: "289",
    ncovhist: 715,
    mjdstarthist: 58091.26695600012,
    mjdendhist: 58903.16262729978,
    corrected: true,
    stellar: true,
    ndet: 110,
    g_r_max: 0.800787,
    g_r_max_corr: 0.88851374,
    g_r_mean: 0.9625778,
    g_r_mean_corr: 0.9218844,
    firstmjd: 58340.49339119997,
    lastmjd: 58903.16262729978,
    deltajd: 562.6692360998131,
    meanra: 63.989755074545464,
    meandec: 45.43048804363635,
    sigmara: 0.0001010679201514473,
    sigmadec: 3.9540272182504045e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.496824,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaas",
    ndethist: "227",
    ncovhist: 697,
    mjdstarthist: 58090.29570600018,
    mjdendhist: 58941.17497690022,
    corrected: true,
    stellar: true,
    ndet: 141,
    g_r_max: 1.4282761,
    g_r_max_corr: 0.84003764,
    g_r_mean: 1.8410759,
    g_r_mean_corr: 0.73132443,
    firstmjd: 58348.49056709977,
    lastmjd: 58941.17497690022,
    deltajd: 592.6844098004512,
    meanra: 68.57808817163118,
    meandec: 49.0870904893617,
    sigmara: 7.14375154802766e-5,
    sigmadec: 6.398739686438419e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.295944,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaat",
    ndethist: "280",
    ncovhist: 716,
    mjdstarthist: 58089.162685200106,
    mjdendhist: 58903.13744209986,
    corrected: true,
    stellar: true,
    ndet: 70,
    g_r_max: 0.6319351,
    g_r_max_corr: 0.97379136,
    g_r_mean: 1.0823002,
    g_r_mean_corr: 0.9205611,
    firstmjd: 58356.452719899826,
    lastmjd: 58903.13744209986,
    deltajd: 546.684722200036,
    meanra: 61.91399164857143,
    meandec: 45.440929972857155,
    sigmara: 7.899635240693725e-5,
    sigmadec: 6.680044676039437e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.52668,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaau",
    ndethist: "265",
    ncovhist: 712,
    mjdstarthist: 58092.16392360022,
    mjdendhist: 58899.16116899997,
    corrected: true,
    stellar: true,
    ndet: 23,
    g_r_max: 1.14007,
    g_r_max_corr: 0.9322139,
    g_r_mean: 0.88746834,
    g_r_mean_corr: 0.9062909,
    firstmjd: 58356.48578700004,
    lastmjd: 58899.16116899997,
    deltajd: 542.6753819999285,
    meanra: 62.22536714782609,
    meandec: 45.51568140434784,
    sigmara: 0.00010333053262349579,
    sigmadec: 7.706359521475904e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.5335,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaaw",
    ndethist: "207",
    ncovhist: 599,
    mjdstarthist: 58092.16392360022,
    mjdendhist: 58909.17423610017,
    corrected: true,
    stellar: true,
    ndet: 136,
    g_r_max: 0.45707703,
    g_r_max_corr: 0.7583518,
    g_r_mean: 0.69755363,
    g_r_mean_corr: 0.8091936,
    firstmjd: 58350.4778355998,
    lastmjd: 58909.17423610017,
    deltajd: 558.6964005003683,
    meanra: 62.784052552941205,
    meandec: 46.34073631029415,
    sigmara: 9.254875467167816e-5,
    sigmadec: 7.124712160976874e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.46,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaabc",
    ndethist: "172",
    ncovhist: 535,
    mjdstarthist: 58089.19526620023,
    mjdendhist: 58912.185300900135,
    corrected: true,
    stellar: true,
    ndet: 65,
    g_r_max: 1.4521103,
    g_r_max_corr: 1.3303767,
    g_r_mean: 1.4327316,
    g_r_mean_corr: 1.2238134,
    firstmjd: 58363.51214119978,
    lastmjd: 58912.185300900135,
    deltajd: 548.6731597003527,
    meanra: 69.25895247846154,
    meandec: 45.97882213076922,
    sigmara: 7.471956213975467e-5,
    sigmadec: 4.2656370139610605e-5,
    class: "CEP",
    classifier: "lc_classifier",
    probability: 0.24424,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaabc",
    ndethist: "172",
    ncovhist: 535,
    mjdstarthist: 58089.19526620023,
    mjdendhist: 58912.185300900135,
    corrected: true,
    stellar: true,
    ndet: 65,
    g_r_max: 1.4521103,
    g_r_max_corr: 1.3303767,
    g_r_mean: 1.4327316,
    g_r_mean_corr: 1.2238134,
    firstmjd: 58363.51214119978,
    lastmjd: 58912.185300900135,
    deltajd: 548.6731597003527,
    meanra: 69.25895247846154,
    meandec: 45.97882213076922,
    sigmara: 7.471956213975467e-5,
    sigmadec: 4.2656370139610605e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.24424,
    step_id_corr: "corr_bulk_0.0.1",
  },
];

export const mockCandidates: Candidate[] = [
  {
    oid: "ZTF17aaaaaal",
    ndethist: "159",
    ncovhist: 738,
    mjdstarthist: 58096.133761600126,
    mjdendhist: 58941.17771989992,
    corrected: true,
    stellar: true,
    ndet: 71,
    g_r_max: 0.9047756,
    g_r_max_corr: 0.85473585,
    g_r_mean: 0.94932175,
    g_r_mean_corr: 0.759152,
    firstmjd: 58365.475034699775,
    lastmjd: 58941.17771989992,
    deltajd: 575.7026852001436,
    meanra: 59.89900274929576,
    meandec: 50.27808571549295,
    sigmara: 0.0001531663529562885,
    sigmadec: 8.338496720951665e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.638608,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaam",
    ndethist: "201",
    ncovhist: 641,
    mjdstarthist: 58094.10457180021,
    mjdendhist: 58903.16262729978,
    corrected: true,
    stellar: true,
    ndet: 27,
    g_r_max: 1.3591805,
    g_r_max_corr: 2.366936,
    g_r_mean: 1.3026714,
    g_r_mean_corr: 2.2032235,
    firstmjd: 58441.4503008998,
    lastmjd: 58903.16262729978,
    deltajd: 461.712326399982,
    meanra: 60.27520874814817,
    meandec: 49.81178643333333,
    sigmara: 8.247759775315633e-5,
    sigmadec: 6.651041561049727e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.444176,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaan",
    ndethist: "283",
    ncovhist: 795,
    mjdstarthist: 58091.26695600012,
    mjdendhist: 58941.17771989992,
    corrected: true,
    stellar: true,
    ndet: 167,
    g_r_max: 0.5568104,
    g_r_max_corr: 0.49664247,
    g_r_mean: 0.6157417,
    g_r_mean_corr: 0.5027184,
    firstmjd: 58343.446620400064,
    lastmjd: 58941.17771989992,
    deltajd: 597.7310994998552,
    meanra: 64.33417051676645,
    meandec: 45.59425647604789,
    sigmara: 9.473548504603022e-5,
    sigmadec: 7.851658117390297e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.509888,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaao",
    ndethist: "289",
    ncovhist: 715,
    mjdstarthist: 58091.26695600012,
    mjdendhist: 58903.16262729978,
    corrected: true,
    stellar: true,
    ndet: 110,
    g_r_max: 0.800787,
    g_r_max_corr: 0.88851374,
    g_r_mean: 0.9625778,
    g_r_mean_corr: 0.9218844,
    firstmjd: 58340.49339119997,
    lastmjd: 58903.16262729978,
    deltajd: 562.6692360998131,
    meanra: 63.989755074545464,
    meandec: 45.43048804363635,
    sigmara: 0.0001010679201514473,
    sigmadec: 3.9540272182504045e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.496824,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaas",
    ndethist: "227",
    ncovhist: 697,
    mjdstarthist: 58090.29570600018,
    mjdendhist: 58941.17497690022,
    corrected: true,
    stellar: true,
    ndet: 141,
    g_r_max: 1.4282761,
    g_r_max_corr: 0.84003764,
    g_r_mean: 1.8410759,
    g_r_mean_corr: 0.73132443,
    firstmjd: 58348.49056709977,
    lastmjd: 58941.17497690022,
    deltajd: 592.6844098004512,
    meanra: 68.57808817163118,
    meandec: 49.0870904893617,
    sigmara: 7.14375154802766e-5,
    sigmadec: 6.398739686438419e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.295944,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaat",
    ndethist: "280",
    ncovhist: 716,
    mjdstarthist: 58089.162685200106,
    mjdendhist: 58903.13744209986,
    corrected: true,
    stellar: true,
    ndet: 70,
    g_r_max: 0.6319351,
    g_r_max_corr: 0.97379136,
    g_r_mean: 1.0823002,
    g_r_mean_corr: 0.9205611,
    firstmjd: 58356.452719899826,
    lastmjd: 58903.13744209986,
    deltajd: 546.684722200036,
    meanra: 61.91399164857143,
    meandec: 45.440929972857155,
    sigmara: 7.899635240693725e-5,
    sigmadec: 6.680044676039437e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.52668,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaau",
    ndethist: "265",
    ncovhist: 712,
    mjdstarthist: 58092.16392360022,
    mjdendhist: 58899.16116899997,
    corrected: true,
    stellar: true,
    ndet: 23,
    g_r_max: 1.14007,
    g_r_max_corr: 0.9322139,
    g_r_mean: 0.88746834,
    g_r_mean_corr: 0.9062909,
    firstmjd: 58356.48578700004,
    lastmjd: 58899.16116899997,
    deltajd: 542.6753819999285,
    meanra: 62.22536714782609,
    meandec: 45.51568140434784,
    sigmara: 0.00010333053262349579,
    sigmadec: 7.706359521475904e-5,
    class: "Periodic-Other",
    classifier: "lc_classifier",
    probability: 0.5335,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaaaw",
    ndethist: "207",
    ncovhist: 599,
    mjdstarthist: 58092.16392360022,
    mjdendhist: 58909.17423610017,
    corrected: true,
    stellar: true,
    ndet: 136,
    g_r_max: 0.45707703,
    g_r_max_corr: 0.7583518,
    g_r_mean: 0.69755363,
    g_r_mean_corr: 0.8091936,
    firstmjd: 58350.4778355998,
    lastmjd: 58909.17423610017,
    deltajd: 558.6964005003683,
    meanra: 62.784052552941205,
    meandec: 46.34073631029415,
    sigmara: 9.254875467167816e-5,
    sigmadec: 7.124712160976874e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.46,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaabc",
    ndethist: "172",
    ncovhist: 535,
    mjdstarthist: 58089.19526620023,
    mjdendhist: 58912.185300900135,
    corrected: true,
    stellar: true,
    ndet: 65,
    g_r_max: 1.4521103,
    g_r_max_corr: 1.3303767,
    g_r_mean: 1.4327316,
    g_r_mean_corr: 1.2238134,
    firstmjd: 58363.51214119978,
    lastmjd: 58912.185300900135,
    deltajd: 548.6731597003527,
    meanra: 69.25895247846154,
    meandec: 45.97882213076922,
    sigmara: 7.471956213975467e-5,
    sigmadec: 4.2656370139610605e-5,
    class: "CEP",
    classifier: "lc_classifier",
    probability: 0.24424,
    step_id_corr: "corr_bulk_0.0.1",
  },
  {
    oid: "ZTF17aaaaabc",
    ndethist: "172",
    ncovhist: 535,
    mjdstarthist: 58089.19526620023,
    mjdendhist: 58912.185300900135,
    corrected: true,
    stellar: true,
    ndet: 65,
    g_r_max: 1.4521103,
    g_r_max_corr: 1.3303767,
    g_r_mean: 1.4327316,
    g_r_mean_corr: 1.2238134,
    firstmjd: 58363.51214119978,
    lastmjd: 58912.185300900135,
    deltajd: 548.6731597003527,
    meanra: 69.25895247846154,
    meandec: 45.97882213076922,
    sigmara: 7.471956213975467e-5,
    sigmadec: 4.2656370139610605e-5,
    class: "E",
    classifier: "lc_classifier",
    probability: 0.24424,
    step_id_corr: "corr_bulk_0.0.1",
  },
];
