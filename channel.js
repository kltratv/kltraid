function decode(encrypted) {
    const key = { '_': 'a', '2': 'b', 'Q': 'c', 'W': 'd', 'I': 'e', '7': 'f', 'N': 'g', 't': 'h', '5': 'i', '6': 'j', '8': 'k', 'n': 'l', 'G': 'm', '9': 'n', 'd': 'o', 'V': 'p', 'l': 'q', 'p': 'r', 'k': 's', '.': 't', 'C': 'u', 'v': 'v', 'X': 'w', 'F': 'x', 'j': 'y', 'U': 'z', '0': 'A', '-': 'B', 'y': 'C', '3': 'D', 'T': 'E', 'w': 'F', 'b': 'G', '&': 'H', 'c': 'I', 'Y': 'J', 'o': 'K', '=': 'L', 'i': 'M', 'm': 'N', 'x': 'O', 'K': 'P', ':': 'Q', 'Z': 'R', 'e': 'S', 'A': 'T', 'H': 'U', '/': 'V', 'M': 'W', 'g': 'X', 'P': 'Y', 'J': 'Z', 'r': '0', 'S': '1', 'u': '2', 'B': '3', 'f': '4', 'R': '5', 'L': '6', 'z': '7', '1': '8', 's': '9', 'O': '.', 'h': '_', 'D': '-', 'q': '/', 'E': ':', '?': '&', 'a': '?', '4': '=' };
    return encrypted.split('').map(char => key[char] || char).join('');
}
		// Channel data - add more channels if needed
		const channels = {
		  'rcti': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqZyAcD33qk_hW_kthvGFqZyAcD33OGVW'), 
			drm: { [decode('s2_BISRBI71sRLWLIu2rL1f7Q7zf7R17')]: decode('W2Qu1Q2RQLfuLr1r7s1f_R2LWfBL22Br') }
		  },
		  'mnc': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqimyA/D&3qk_hW_kthvGFqimyA/D&3OGVW'), 
			drm: { [decode('1u1Ir_2_s1uRQBRfL_u1BSIfQrQBL7z7')]: decode('71RWBWQWB1s1SBL1_2BW_RszIszI2WQQ') }
		  },
		  'gtv': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqbA/D&3qk_hW_kthvGFqbA/D&3OGVW'), 
			drm: { [decode('117LQzQ2WzsBBzfQ2R7SuWzIuLWQWLB2')]: decode('I1uW__zQz272rBWssBuzfLB7W2WBzBBL') }
		  },
		  'inews': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkq5mIXkA/D&33qk_hW_kthvGFq5mIXkA/D&33OGVW'), 
			drm: { [decode('_BSQ7RSBLz1sRSf2zISu2sQQssBrzQ1f')]: decode('s1rIRfWLzS77Qu2u7fQ7RfIzRQ_Ir_Qu') }
		  },
		  'rtv': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqZA/qk_hW_kthvGFqZA/OGVW'), 
			drm: { [decode('BrB1fIIRfufI_2f_7W77BfWz_RsIrI7s')]: decode('R7BWu7uQSsfuLL_Is_u1uSr71szLQ2Ir') }
		  },
		  'sindonews': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqimy9IXkD&33qk_hW_kthvGFqimy9IXkD&33OGVW'), 
			drm: { [decode('uLQQBIBBfB1R1WBs1LBuu7SLISr2R1uB')]: decode('r_WzBRIzrzISQzs2QRRrI7_fs7uI_f2W') }
		  },		  
		  'trans7': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqAp_9kzDuqk_hW_kthvGFqAp_9kzDuOGVW'), 
			drm: { [decode('uL2WLrIrB22IWz1SsII_r2uzrzR_S1sz')]: decode('WuuS2_L_L_2LLIBr1BQrrSWuQf_BIRQR') }
		  },
		  'transtv': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqAp_9kA/Duqk_hW_kthvGFqAp_9kA/DuOGVW'), 
			drm: { [decode('BBfsRrz1S7Lr_LL7RIR1Buf2zr_QLzRW')]: decode('zBQ_Q_sz2I1sssQIsQ7I2B2_2_W1LLsW') }
		  },
		  'tvone': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqA/x9IDuqk_hW_kthvGFqA/x9IDuOGVW'), 
			drm: { [decode('srurfQrRRfR7sR_uLu22rWB_QfRWI1zr')]: decode('rI1r7u_Ss7W71W_fzL27LsRQWsRzr22u') }
		  },
		  'kompas': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqodGV_kA/qk_hW_kthvGFqodGV_kA/OGVW'), 
			drm: { [decode('fsB7WSrILrsWWru_IszsLf7fB1IzIRBr')]: decode('LsRQ7s1sLS1uQRu7SQB_uR1urIzzz17R') }
		  },
		  'antv': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkq0mA/qk_hW_kthvGFq0mA/OGVW'), 
			drm: { [decode('fBSrIW212s77Izs_22fr2_Q_7_zz1IQB')]: decode('_I22zI1LW1_BBLWs_sBWBWW1_fSSRBQ7') }
		  },
		  'mdtv': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqmI.A/D&3qk_hW_kthvGFqmI.A/D&3OGVW'), 
			drm: { [decode('L2z22Q7SWRSS_RLIL2BQIW_BsuIf7_BB')]: decode('WSzLLuffWzQSQffI7WfQLz__7_IBIIz2') }
		  },
		  'tvri': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqKIGIpk_.C-_9Nk_qk_hW_kthvGFqKIGIpk_.C-_9Nk_OGVW'), 
			drm: { [decode('Q_LR_7sr_WQRIBWW2S1rISLfuL22LzW_')]: decode('2L71z_B_Su1W2WzRI_WrBL7RsLIWI_Iz') }
		  },
		  'ar1': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_SOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar2': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_uOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar3': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_BOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar4': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_fOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar5': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_ROGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar6': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_LOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'arp1': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkzq_khVpIG5CGSOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'arp2': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkzq_khVpIG5CGuOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'arp3': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_khVpIG5CGBOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'ar1x2': { 
			url: decode('t..VkEqqXI2.vk.pI_GO2t.InIQdGO2_qtnkLq_pI9_hSFuOGVWa947pd259kFGIjj'), 
			drm: { [decode('QS12L__zBs2IfQr2zzfLrR7Q72RWL2L1')]: decode('IfSQB_L7zRBu2uIB_1u1WsR1rSufQ1sW') }
		  },
		  'arena1cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_Sh9qWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'9002ec8c3dbc55c5bccdcd6871d80fd0': '7099325123bae7810db508727bb0bc7d',
            	'c43c83acda60593d8e3607efd5010d7d': '526f4a760ef52ab85056fbc10ea27584',
            	'712090aae2065c21951b170bc3002330': 'a97774e4175b80205c3cf104e9574208' 
            }
		  },  
		  'arena2cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_uqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'c5e5ac1b3cc15fe790f1bc96535fe329': '3defe59c38079ccad25a436200ad3bd7',
            	'b2f22f5d7ca35910a73fbabc524954de': 'd87d08fbe6505ad7099b8c258f396d15',
            	'd256b403efcc5c3db701fc696885e102': 'd46e4215e279b224e9d2a772db9c74a1' 
            }
		  },  
		  'arena3cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_BqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'3bedf4a896695958907e0984165090f0': 'a58317ffddf318f1540f31f67d95b5fb',
            	'25c3df3202005cc98c47700295be59ca': '073f5a39d84dd14a9debd1a72bb1f055',
            	'ccebefcba0a3546ba34d3fc587651708': '18f2b2027ce26867c23dcd7f57faa245' 
            }
		  },  
		  'arena4cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_fqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'77ce6938c781526e999b688992f27764': 'bf1178841770fdba74f8629f0f06d2c0',
            	'68cd661dbc8352fda000c532840f6340': '0255fb620f4f707ea7ba090058718306',
            	'89d1dc54692e5b4fb5995fc0953bf5bf': '31b8953ab60b90fefc93d9bd1b806fbc' 
            }
		  },
		  'arena5cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_RqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'34a709bbeac052f293c778c0770829fd': '2b801fde1ad4839d4080d6ec6b0ec4ce',
            	'e473ec5d96f45a9f9a22eb665b5b1ea9': 'ace54ce15b69d249b00395c9e6b85b90',
            	'18d3fba08f3152c38f14151219fa9792': '78b0c5b961351e482be81287466ecb08' 
            }
		  },
		  'arena6cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_LqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'b3b60e79989a5b2799fa3a2394b8749f': 'a25d21e333dad3d131f126b7b57730be',
            	'bfd8ff04a3625fcea8335c9575401697': '769d61a2d6fd7030a5088df2e70c2654',
            	'5a86e42c58cf5d008546861c0f0fb22a': '67b1172a05bcb38a91a304d7098ce7f5' 
            }
		  },
		  'arena7cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_zqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'5998265ef8fc5748822fef96229831aa': '9110b6be31b4bbdce67374bae3395269',
            	'5d4b5005dbd355559b3c7fe4dae1fb05': '10e65a5b74158216190e654cdf05b584',
            	'5244c72f4f5d5e1a8778fc93906c9cb3': '4c14a6a924ef7fb32534dd590d99d499' 
            }
		  },  
		  'arena8cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_1qWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'c6fc5b27b74e5b8e82ca19da484eb174': '51f8fd5eef736dccaea9235b621731e7',
            	'b9e9546bc9ba52d1a75fba9222efa7f5': '2cec65c6b79be6c2d4481c6e0ef79bfc',
            	'ca202ac1353a5c6b9960bdbb82f88efc': '7ef86abd9a62042858370852836c50b4' 
            }
		  }, 
		  'arena9cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_sqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'91a56f5aab4c56cb88fbf787187acafe': '0000816079a5ec4f093e3274bda26f2a',
            	'a2ff372a21b35653a88592abfec3f9a7': 'd5bc25088d1fda12849aad90716de750',
            	'7ecfd12eb26258c381afadac16ac8fc9': 'b4f351533d633abf76cda47fe75d579b' 
            }
		  }, 
		  'arena10cr': { 
			url: decode('t..VkEqq2VQW9G_9VpdWO9IF..vOt.Otpq2V8D.vq_pI9_SrqWI7_Cn.q59WIFOGVW'), 
			drm: { 
              	'ee6860a6bf7a5f6c89bcf1794d16e25f': 'b573f718f1551d2cf2a335ca778f5604',
            	'03ed75ef7e4c56cb8f81cc17952fc554': '2be3b8e9f4756601e5b263beb14c5908',
            	'ea5736047df25edbb48bd055d48eb3dd': '8b40d3a415517224245a79e907cb8ef0' 
            }
		  },
		  'sportsk1': { 
			url: decode('t..VkEqqW_ktuO_9.58Ok8qk.pI_Gq9v5W5_hkVdp.hSqVn_jn5k.hQI9QOGVW'), 
			drm: { [decode('SSuuBBffRRLLzz11ssrrSSuuBBffRRLL')]: decode('f21rzufWrI71L2Q2uQuS7zsssWLzzBsW') }
		  },	  
		  'spoid1': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqeKxA/D&3qk_hW_kthvGFqeKxA/D&3OGVW'), 
			drm: { [decode('RzWu_QsuSrQ72Q_BRsLQQLzs_rSQ12us')]: decode('WRIBRQr7BsQzL_W7uf1RBWzI_S1QzSIz') }
		  },
		  'spoid2': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqeKxA/uD&3qk_hW_kthvGFqeKxA/uD&3OGVW'), 
			drm: { [decode('RzWu_QsuSrQ72Q_BRsLQQLzs_rSQ12us')]: decode('WRIBRQr7BsQzL_W7uf1RBWzI_S1QzSIz') }
		  },
		  'spoph1': { 
			url: decode('t..VkEqqlVDVnW.Dn5vIDNpVDSSDVpdWO_8_G_5UIWO9I.qdC.qCqWphkVd.vtWOGVW'), 
			drm: { [decode('IQzIIuzW1BzLfIf21fRQf1QQ_BSQ1II7')]: decode('sQrIfSsSurB7QQ2r7WIBfIIussssSusI') }
		  },
		  'spoph2': { 
			url: decode('t..VkEqqlVDVnW.Dn5vIDNpVDSBDVpdWO_8_G_5UIWO9I.qdC.qCqWphkVd.vutWOGVW'), 
			drm: { [decode('zII_zuWLrzRufR_ssIIBuRRLrBWR11RB')]: decode('L1f1I7LrRzRRzs27fWfSRW2SrBuSRBIW') }
		  },
		  'tnt1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqQn5I9.kqW_ktqI9QqX71Ck_NRSIqdC.qvSq2WB2rQBSf777f22S_2fLsBBR17BQWuWBqQI9QOGVW'), 
			drm: { [decode('_IuL1fR2WBBrB1_sQrzzf_rs1Srrzusf')]: decode('LB_QLLuWWIBSrQ72fQQL7s2fB2BfSsLW') }
		  },
		  'tnt2': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqQn5I9.kqW_ktqI9Qq7rlv8pp_16qdC.qvSq717_Sz7r1zRLf7RS__fWRQzrr2IfBIQfqQI9QOGVW'), 
			drm: { [decode('LWSzr12S1RQLQfWz2BzLrrRurQzQQsBQ')]: decode('S__QIrR7R1W1IWI7sLsz7WRuQ2rs7ffS') }
		  },
		  'tnt3': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqQn5I9.kqW_ktqI9QqnkW_k2vNnvqdC.qvSq22Rf1_BLuLQWfzr1_722sf_R1WzSWQIsqQI9QOGVW'), 
			drm: { [decode('fIssB__1QS7usR712sfI1IsIL7LWr27I')]: decode('1L_SIWLIsLQ__21I2Srrs7IRBrWuQ7f7') }
		  },
		  'tnt4': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqQn5I9.kqW_ktqI9Qq5uVQ6pfVIRqdC.qvSqsSuIsW2RLWzRfrB21_s_Qr_zSsSSr7BLqQI9QOGVW'), 
			drm: { [decode('IBS_R_1SQ_77RWrzI_ufSS_RzS7QuIRs')]: decode('sLQRI7LsfzszBu_IzBf7sLuzf1QSszus') }
		  },
		  'tnt5': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqQn5I9.kqW_ktqI9QqNIkWXpW9Q9qdC.qvSqzsIzRu7SIQQWfIS12L_1srf_r2QrS7uWqQI9QOGVW'), 
			drm: { [decode('LrQrWs2fSfzRIrSW2f772sSIWRRz72QQ')]: decode('BLIIfrIR1sf1Q_SRIBQ_2_1Wfz217Bf2') }
		  },
		  'fox1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.q5_WD95.pdqn5vIqQn5I9.kqW_ktqI9Qqd2dFIRBXjdqdC.qvSq7z1su_sWzrLWfSs_1fLWzB17_uuI_BBIqQI9QOGVW'), 
			drm: { [decode('u72W__B2I_rWrBuB_IrSS2BS1WSW2zSL')]: decode('1zuLI7zI_7R2sWQISR72L__s71r2WRB7') }
		  },
		  'fox2': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.q5_WD95.pdqn5vIqQn5I9.kqW_ktqI9Qq.IV6lI6SjkqdC.qvSqQsQsSRs2_IIzfs_SsLSu2SRs1fsR1Rs_qQI9QOGVW'), 
			drm: { [decode('11BL72rfWLuWQLfQs71_BsI71LfrWRI2')]: decode('Wf7rRQIRLQRuBS2zQW7RBfRR2I_R1LuS') }
		  },
		  'fox3': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.q5_WD95.pdqn5vIqQn5I9.kqW_ktqI9QqXj2NUrdpp1qdC.qvSqu7LWSLSu_2Wff7R11BsSz71_R1R2sRR7qQI9QOGVW'), 
			drm: { [decode('SSQ1QSQuI7rB1RQ7SILfWff22sQB_BsR')]: decode('RzLszBr772WQf2u7W1sfRsusWs_QIrLB') }
		  },
		  'ad1': { 
			url: decode('t..VkEqqCkInIQ.dpOQW9O59.5Np_nDd..O9I.q03eKSq03eKSO5kGnqG_957Ik.OGVW'), 
			drm: { [decode('I2R_B_f17BISsS_rrIB_QSIuWfzrQfsS')]: decode('uQ12zSs1RLBRuzIRufWLLLu1QrsuI7S7') }
		  },
		  'ad2': { 
			url: decode('t..VkEqqCkInIQ.dpOQW9O59.5Np_nDd..O9I.q03eKuq03eKuO5kGnqG_957Ik.OGVW'), 
			drm: { [decode('I7Q_sBuzu2sWBf7RQ7sW1Rs17fB2IRI_')]: decode('RRIR7If1sIsQS17LQszsQBSuLWf2Q7IW') }
		  },
		  'soccerchannel': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqkdQQIpQt_99InD.Ik.qk_hW_kthvGFqkdQQIpQt_99InD.Ik.OGVW'), 
			drm: { [decode('fWB1rLr27fS2BQusW7rIQsRrIQIL2RW_')]: decode('zIIsRrL2SBf1rfsSWzs2zSQrLu_2RBLL') }
		  },
		  'sportstar1': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqimyeVdp.kD&3qk_hW_kthvGFqimyeVdp.kD&3OGVW'), 
			drm: { [decode('RBSQLWRrIBIs7s2_LLffL7Luf7fsuu1s')]: decode('WzLsWs_IuB12WWfuf712QWQWQs_B1rS7') }
		  },
		  'sportstar2': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqimyeVdp.kuD&3qk_hW_kthvGFqimyeVdp.kuD&3OGVW'), 
			drm: { [decode('fR7IQsSQIS7Ss2L2S7BSWLsWQ7__7LQW')]: decode('1fBIuu1_2SrsIs__LQf1uuIIf_WrRWzW') }
		  },
		  'usaceast': { 
			url: decode('t..VkEqq7knjOk.pI_GOVI_QdQ8.vOQdGqyd9.I9.qyi0whx=SDyAZDfkq=5vIqQt_99In(Ck_DI_k.)qG_k.IpOGVW'), 
			drm: { [decode('sS27uW1S2sISBzrS_QLLzsSRLfSSuS21')]: decode('WrQQur1uSBu2fBr_WR_12Qf7BSQs2zzu') }
		  },
		  'usacwest': { 
			url: decode('t..VkEqq7knjOk.pI_GOVI_QdQ8.vOQdGqyd9.I9.qyi0whx=SDyAZDfkq=5vIqQt_99In(Ck_DXIk.)qG_k.IpOGVW'), 
			drm: { [decode('BBBsLuIBISB1BRus1Lz_s_rIu1_RIRWS')]: decode('RWB7Q2IWRBzfsIILuuIWrILf7BSQSQ27') }
		  },
		  'peacock1': { 
			url: decode('t..VkEqq7knjOk.pI_GOVI_QdQ8.vOQdGqyd9.I9.qyi0whyAZDfkq=5vIqQt_99In(vQSruS9rz6)qG_k.IpOGVW'), 
			drm: { [decode('rrurfLQs_fs2s_2SQW2LLSL2IQRWuLQB')]: decode('Wu7su7L2zIWQs_S_rRWBsB2_rQurI7sI') }
		  },
		  'peacock2': { 
			url: decode('t..VkEqq_8_GOk.pI_GOVI_QdQ8.vOQdGqyd9.I9.qyi0whyAZDfkq=5vIqQt_99In(vQSruS9rz6)qG_k.IpOGVW'), 
			drm: { [decode('rrurfLQs_fs2s_2SQW2LLSL2IQRWuLQB')]: decode('Wu7su7L2zIWQs_S_rRWBsB2_rQurI7sI') }
		  },
		  'peacockev1': { 
			url: decode('t..VkEqqNrrBDknIDCkDQG_7DVpWDQ7OQW9OVI_QdQ8.vOQdGqQdrSqyd9.I9.qyi0wheuDyAZDfkDvuq=5vIqQt_99In(RrSfzu1DzSLSuLDf17sRS7_7RI)qG_k.IpOGVW'), 
			drm: { [decode('rruurWfI2LLS_Ws2BWWfQfBBfBs7QzIW')]: decode('WfSSuLIs_LRBr_R1uuzIB1IsLLRQSWQI') }
		  },
		  'dazn1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9Qq2G9IndRQz_qdC.qvSqBQIuQWQfR1s7fLS1sBuu2WBzSzQzzsRzqQI9QOGVW'), 
			drm: { [decode('ffWWsQWBzr2r1_1L1I_WSSR7I1fIQ7WI')]: decode('277Ss_2r_RSQ7SfI1f1B1s2SRusSB7Wr') }
		  },
		  'dazn2': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqF98fGs29F.qdC.qvSqfQIWz2zBus_RfLRu2s22rRuSIWB12WfWqQI9QOGVW'), 
			drm: { [decode('rI_2R_B7BIB2f2_RWfuWfrQ_BrWSzRzS')]: decode('7B7rLSWIWs2zrI1SLrRsrWR1ruIQW_LW') }
		  },
		  'dazn3': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqUjSIIRkktVqdC.qvSq2WQ77_Ls7_B2f7B22BRLsQsQzBIISQrSqQI9QOGVW'), 
			drm: { [decode('2_W1I777L11QrW22BzSSIf_zSSfQuu_B')]: decode('L2_1rrLzB2urzzLQrQ1RrSBrWfRISsur') }
		  },
		  'dazn4': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqCVzlVXQts2qdC.qvSq_LWRWS_Su1z2f1sB21RsQuWLQQ7uQLRWqQI9QOGVW'), 
			drm: { [decode('WuzSrfWfuzIf71zIzR2SsBsR_s71zsL2')]: decode('zuBRsBQzrIuWfQf1LuzRfBs1I1rSL171') }
		  },
		  'daznla1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqX6N8n2.vttqdC.qvSqLRszBL_SIufQfrIf1LR_1r77WzRIzWIzqQI9QOGVW'), 
			drm: { [decode('fBWSQB2uRurz77B12uuQQ7ISzWBruBLz')]: decode('z2S71R7LI1SrRsfzB2SSfQSL_uRQ1us_') }
		  },
		  'daznla2': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqXdC6v879G9qdC.qvSqSfS2Ru7r1_SIfIsz1RruSszusIIf1WQ1qQI9QOGVW'), 
			drm: { [decode('r2S7WI_IIB77QRSIs_LLQ7SsB1WRz__7')]: decode('u1IBQ211_2z2fzL21S_21__rLufQfWzS') }
		  },
		  'daznf1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qWC2D95.pdqn5vIqQn5I9.kqW_ktqI9QqQl2QvN821BqdC.qvSqfW2IrRIQ72SRfrff1W1uWL1III2722SQqQI9QOGVW'), 
			drm: { [decode('SrLS2ISuWBrBufzfuLIQuRI1BLs2uLfz')]: decode('2WLuu2rILSrusRWIB2r2QQ21RrQQ____') }
		  },
		  'tel': { 
			url: decode('t..VkEqqn5vIDd9I_VVDVpWD9IXkO_8_G_5UIWO9I.qyd9.I9.qyi0whx=SDyAZDfkq=5vIqQt_99In(Meme)qG_k.IpOGVW'), 
			drm: { [decode('zWL22s71LISBBIfQ2BBffr2fsB2L2Lzu')]: decode('R1f_Wu1RWQ2sIzWfuQ7BIsB7SQQB7ISS') }
		  },
		  'univ': { 
			url: decode('t..VkEqqn5vIDd9I_VVDVpWD9IXkO_8_G_5UIWO9I.qyd9.I9.qyi0whx=SDyAZDfkq=5vIqQt_99In(C95vIpkdDI_k.)qG_k.IpOGVW'), 
			drm: { [decode('uBuWzS22rSBWBs772suII1QRzL72zI1I')]: decode('r1zfr1_f12I1WRzrfLQB1L12BzI_sr2_') }
		  },
		  'daznde1': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqW_ktqI9Qq8uWQX9nVNpqdC.qvSqrRruWQzB_uf2fB_zsQrfu27uWSf7L21fqQI9QOGVW'), 
			drm: { [decode('rQsrr_zI_IrrszIrszzSfS2L1Qs277Qf')]: decode('7_RBfILWf1IQQ7srR_ffsrRS_RIu1rQ1') }
		  },
		  'daznde2': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qntpD95.pdqn5vIqW_ktqI9QqXWFGpF8WzrqdC.qvSqB2sf7L1srfs_fBWr1uLf1WrsB_zz7R71qQI9QOGVW'), 
			drm: { [decode('7IfISQWuII_sIz_QR2BLRQuLSIfSQRzQ')]: decode('B1WWS_rzRS__r7rf7urBRLBLQ7rLr1I2') }
		  },
		  'fubo': { 
			url: decode('t..VkEqqd..IOn5vIO7njOXXO_5vDQW9O9I.qVWFD95.pdqn5vIqQn5I9.kqW_ktqI9QqB2zlX5lU8BqdC.qvSqs7Sf1sR2_WQ_fBIL_zSLW2ruSWQWrQBSqQI9QOGVW'), 
			drm: { [decode('WQLs2LSRs_r7s7r_fIrB2B77sSQ2_QWR')]: decode('WrWQ2QWzzuB2QfrW7r27BfQsQrsuWRS7') }
		  },		  
		  'rtlde': { 
			url: decode('t..VkEqqV9dXn5vID_O_8_G_5UIWO9I.qn5vIqp.ntWqW_ktqp.ntWOGVW'), 
			drm: { [decode('RzIf12ss7B7LWf7SB7RQR_7WQQ_r1fQ_')]: decode('usBzs_RIuWBfrR7_Wu7RWsQ2IsuR1LQB') }
		  },
		  'nbc': { 
			url: decode('t..VkEqq7knjOk.pI_GOVI_QdQ8.vOQdGqyd9.I9.qyi0whx=SDyAZDfkq=5vIqQt_99In(892Q)qG_k.IpOGVW'), 
			drm: { [decode('rrfR_SS1IuBS7SBuL2QW2fRBRr2SQI__')]: decode('1QSB_727_RfI_Bz_BL12121RsruS7LIB') }
		  },
		  'sn360': { 
			url: decode('t..VkEqqn5vIDWDruDpdNIpkDCXDVpWO_8_G_5UIWO9I.qdC.qvSqpDVpWqQtDrLDVpWDpDvuqW_ktDQtDrLDVpWDpDtWq59WIFOGVW'), 
			drm: { [decode('uzQrW7s7_uIsBSf21Qfs71ufIS77sW1u')]: decode('77Rz2WBf7WIfQLruuB1R1zs7IBsfWWLW') }
		  },	
		  'snpacific': { 
			url: decode('t..VkEqqn5vIDWDruDpdNIpkDCXDVpWO_8_G_5UIWO9I.qdC.qvSqpDVpWqQtDrfDVpWDpDvuqW_ktDQtDrfDVpWDpDtWq59WIFOGVW'), 
			drm: { [decode('z_RLR1SrQsQ2BR_Q_rRfzL_7Sr277IrR')]: decode('2LzRsWLRrR_BzzWQIQzL1_BIQ2SQ2_Wr') }
		  },	
		  'snone': { 
			url: decode('t..VkEqqn5vIDWDruDpdNIpkDCXDVpWO_8_G_5UIWO9I.qdC.qvSqpDVpWqQtDrRDVpWDpDvuqW_ktDQtDrRDVpWDpDtWq59WIFOGVW'), 
			drm: { [decode('W2_WSLzu2S27BWr_2WSQSQuSLSrRz7ss')]: decode('ISSrrQfIuf7ru1Wfz_BLI_WBz7r7WRR7') }
		  },	
		  'sneast': { 
			url: decode('t..VkEqqn5vIDWDruDpdNIpkDCXDVpWO_8_G_5UIWO9I.qdC.qvSqpDVpWqQtDrSDVpWDpDvuqW_ktDQtDrSDVpWDpDtWq59WIFOGVW'), 
			drm: { [decode('7rfrzz1z2fW1BIRW2sW2QWzLr_IQSzQI')]: decode('r7zQuzBL7fsLQuWuIQQQsI22Iuzzss2s') }
		  },  
		  'mncsports': { 
			url: decode('t..VkEqq_vDQtDQW9OG9Q9dXO5Wqn5vIqIWkqimyeVdp.kuD&3qk_hW_kthvGFqimyeVdp.kuD&3OGVW'), 
			drm: { [decode('fR7IQsSQIS7Ss2L2S7BSWLsWQ7__7LQW')]: decode('1fBIuu1_2SrsIs__LQf1uuIIf_WrRWzW') }
		  },
		  'sgaff': { 
			url: decode('t..VkEqq.NnGVruO_8_G_5UIWO9I.qdC.qvSq1QRrB_LsLLRRfWfBsrBRR117SrRrRIIIqG_957Ik.OGVW'), 
			drm: { [decode('S21IIBW2SzWBfRfzs1B_uQBWWQBWu17Q')]: decode('72RWI2R7L117WLzIQurQzSSsSQz7fRsr') }
		  },
		  'sgaff2': { 
			url: decode('t..VkEqq.NnGVruO_8_G_5UIWO9I.qdC.qvSqLIR_111Wf271fz_u2IRuSQRR7z27Wr1QqG_957Ik.OGVWa5W4SR'), 
			drm: { [decode('QW7rrrS7LsBsfuW_ssr7I1S_7_BI2rQW')]: decode('L21Wf2QR1LSRfBssRf1RSIIW_zzS7fSz') }
		  },	
		  'espnmx1': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vqSqdC.qCqW_ktqTeKmD&3qWI7_Cn.OGVW'), 
			drm: { [decode('22fBSSu2z2zuIsQu1zW_rIQWIQ1LrL_z')]: decode('usIBWuLz1Srz7r_2r2BR2LRBzQzBf7u_') }
		  },
		  'espnmx2': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vqSqdC.qCqW_ktqTeKmDuD&3qWI7_Cn.OGVW'), 
			drm: { [decode('srIuIfsSQ1Rr_fs_R_2uS22L7_L2fWuf')]: decode('fWzIBBW_Ss2szSQI7fsIBRIQQW2sWIr2') }
		  },
		  'espnmx3': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vqSqdC.qCqW_ktqTeKmDBD&3qWI7_Cn.OGVW'), 
			drm: { [decode('rBRR7Lfuzzr1u2srBruus1RrBRQfs1Q_')]: decode('z_1IWur_fsR1Bs1LzzIuQsQQWR_RB_rr') }
		  },
		  'espnmx4': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vqSqdC.qCqW_ktqTeKmDK=HeD&3qWI7_Cn.OGVW'), 
			drm: { [decode('LLLLrz_7r12sIIWW__ISWLQBL_BfWL1s')]: decode('Sr7WQuf_SfI1fuB7RIR77rBRLsfBs2Sf') }
		  },
		  'espncol1': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(1zRzQ2r_DBR1fDfrQWDsrSID1sBzQzWI2_1B)qG_k.IpOGVW'), 
			drm: { [decode('Q2rrf72Srr2Wsu7uBzsBRLu1sSIBuBL2')]: decode('2BIfIzf_Iur1r2SBzIL122WrI71_zIrR') }
		  },
		  'espncol2': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(LuRLzWRQDusRQDf77WD_QzIDQszfsI1zf11f)qG_k.IpOGVW'), 
			drm: { [decode('_1SIIf_Lsf7IQWL__1_L1uIRruf2BSBQ')]: decode('LWSRRL1ISW_2RsIzuru_ISuIzSRrRS1R') }
		  },
		  'espncol3': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(_B1WSfrSDIIrSDf1ruD1Su_DzQ2fLrQs1BuQ)qG_k.IpOGVW'), 
			drm: { [decode('1_LrWz11s77SuLIIS1sRBBRIsuuRf71I')]: decode('WIS2rQISs7_1rf_SQfzBI21I7uWRQ7LW') }
		  },
		  'espncol4': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(sRrr27ruDrrrSDfSssD_SRrDR1WQRWLsuQQ_)qG_k.IpOGVW'), 
			drm: { [decode('Rf_uQSSr1RQBSRIWL771RQBfr_1LrsRW')]: decode('R7rWSrQ7f_RQzIuuIu1L2zI1Q2fIzs7f') }
		  },
		  'espncol5': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(1rQzfsL1D_uI7DfrrRD1LLSDrfR7Iszfr1_1)qG_k.IpOGVW'), 
			drm: { [decode('fISuLusz7Qz_7BRQzBL2W77Is1IIQ___')]: decode('7W2rrsSQ7LzWsQRsLW272rzQ7L7fQ17R') }
		  },
		  'espncol6': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(2Br__RSIDsz7_DfBRfD22B1D1zS72BLrIs1f)qG_k.IpOGVW'), 
			drm: { [decode('7R1BLB1ufRuQWQ_SISQ12712s_zSBRBf')]: decode('zWuLSsBrQBBrsIWu2rLWu_22Bf_LffSr') }
		  },
		  'espncol7': { 
			url: decode('t..VkEqqvQW9OG9SrOI9.InO2dqyd9.I9.q30e&q=5vIqyt_99In(R_2RW21fDuuBRDfQSrDsrLLD2Is2QuIIr1z_)qG_k.IpOGVW'), 
			drm: { [decode('s1I_SIBuuuz_WQWBLS12__Qu227BL1Sf')]: decode('zu_rB_rsWBBIfSu7Sf_s27_fI7uf2Rfu') }
		  },
		  'skybunmx': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vqRqdC.qCqW_ktqeoPDeKxZAeDufD&3qWI7_Cn.OGVW'), 
			drm: { [decode('W1WR1uBWsu_sI7sBrL_fQQf2WLBf2f2f')]: decode('W7s72W__rI7sIsrR2zR7fLsu7uSB_7Ss') }
		  },
		  'skylamx': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vquqdC.qCqW_ktqeoPDeKxZAeDSLD&3qWI7_Cn.OGVW'), 
			drm: { [decode('Q11WQLQLL1Q_QB2fL1Wf_fQzISzL77BW')]: decode('S_I2zBsWIuQSfIWr_WLR1Q_1rfBur1W1') }
		  },
		  'tntmx': { 
			url: decode('t..VkEqq_8_Dn5vISDd..O5UU5NdO.vquqdC.qCqW_ktqAmAD&3qWI7_Cn.OGVW'), 
			drm: { [decode('WQ_1Rsz7Su71WLsu12RRQSusSQz22Brr')]: decode('BLQ12B7RSWfzf2sR7r_W_Wzr1ssBfBIS') }
		  },		  
		  'ziggo1': { 
			url: decode('t..VkEqqG_NrBO.vFOVpWO.vOdW5WdO9nqXtz7fRfQfL.XzRSL1S11hDLuzus1r11qK=A/q1LquufqBuuSufSRsrqBuuSufSRsrOGVWaUd9Id77kI.4r?WIv82Vk4SDzrrr?kIpv5QI.jVI4S?5QV5W41L?_QQdC9..jVI4S?n5G5.7nCF4DS?n5G5.WCp4DS?.I9_9.cW4BSrB?_QQdC9.597d4%zT%zT/uOr%zTl2QkYth6HRys-QJQsRsIhX_Iff2f1Lz2BfSz__zL2RW2uW_ur7IfLQ%zToJUAM6-1l3SUWN2Y6ZK/=YgD./rl5msZ-&yh5kIbpkGAeZ66rLdb3.bnVeyZbxXwBLuLQ7r1RQr1WrufQzIf__7QS1QBuffr%zTTF.c97dRZdB/VVM5HCk6u5VVlHK8:%B3%B3f_uWuQ1QISBB7fBruLWrIBS21uu21fzf%B0urufrLrSrSu1us%B0HAy%uySrrrSrrBBusuuu%uy1zOuSuOSfrOSzS%uyurufrLrSrSu1us%uyBSrBheKSe%uySrrrSrrBBusuuu%uyDS%uyr%uyS%uy%uy%uyu%uyBSrBheVdp.S%uy%uy%uyu%uySrrrrrfffffBrB%uyr%uySrrrrruRrRruRR%uym3TUx3NumAPBiUTXiUcumUiXm6iXmAP%B3%uy%uy%uyR%uyS%uyTm3?bC_pWT9QAjVI4u?ZAe4SzSzurRBrs?7pdG4SS?tGkhWIv5W4Srr1?d9n59I4SzSzurRBrs?G_NhtGk4Srr1,BSS,BrR?h4SzSzurRBuuLuS'), 
			drm: { [decode('I7Bf_IsS2f7ufSRI1fBs2u_WSrRIzf11')]: decode('ufBuf1W1WIS771QzQR1zIIurRzBSzRuB') }
		  },
		  'ziggo2': { 
			url: decode('t..VkEqqG_NrBO.vFOVpWO.vOdW5WdO9nqXtz7fRfQfL.XuLLSSz11fhDSszu1SsBSLqK=A/q1LquufqBuuSufSRLrqBuuSufSRLrOGVWa_QQdC9.597d4~~/uOr~xt0S3wfkvxJVVoF2D.DmNXSffQQIffSuSQLBu1f_BBWRfRBfsBIRQ1~ShwGnCRKIv&iP9T5sJh&guNdo0Wr/&eCFJidcQ0gQ_XPvbSGIlbVuI:uc2t6vtzIRsIz7LW7BWRz7uB_Buruf_WLz7r7SsWQEHAy,'), 
			drm: { [decode('BQ7_1LuR7LRrfrLI27L_fWSI_zBz7Rzu')]: decode('rRBfIzfzQzr2BLf__zuSrIS27BSsSW7r') }
		  },
		  'ziggo3': { 
			url: decode('t..VkEqqG_NruO.vFOVpWO.vOdW5WdO9nqXtz7fRfQfL.XfrzRRLzrzhDB1SzB1SSSqK=A/q1LquufqBuuSufSRSSqBuuSufSRSSOGVWa_QQdC9.597d4~~/uOr~j/5rWigf5QxRo_sIsuT:7N11SuISQSrff7zWBRzrLLfzuIBIIssI7f~uWZ-sTDv3.d02PnSLs=2QYVFHNM/Y.2IHhKntb7mH7nVtvn6x2R/_TtFpCTAPbslQQQ_7RQR2LRR27zRrfIWzIQR_SWWzs17EHAy,'), 
			drm: { [decode('fW2I_f2RzSB_f__S_IB_uRffQWRuu7Qz')]: decode('_1BuBI_ss2uWLurr_f1IS2QuzBuuWRf1') }
		  },
		  'ziggo4': { 
			url: decode('t..VkEqqW_DWfBLuBfsurrSr211rrrSrBrurrrrrrrrrrrrrrr2O5WOQW9OCVQ2pd_W2_9WOQdGqXVqXVfD_9VDNrRrLrRrLDtU9D9nO.SOVpWOWj9QW9OWGWkWVOQdGqn5vIqW5k8Sqm=hrrrrszhrSsBzrqNdDW_ktD7tWD_vQqm=hrrrrszhrSsBzrOGVWaV4XI2'), 
			drm: { [decode('SL27zuWQuuzfBWsusQfBS1ISsBfr1BzB')]: decode('I_IRS_SIBsrfSufsLBrzfQ27fBuQzQ1I') }
		  },
		  'ziggo5': { 
			url: decode('t..VkEqqG_NrfO.vFOVpWO.vOdW5WdO9nqXtz7fRfQfL.X1LRR1L1ushD1Ss1uSusuqK=A/q1LquufqBuuSufSLSrqBuuSufSLSrOGVWa_QQdC9.597d4~~/uOr~=meuK-xR.jtVRUSKILx2-0LQWz_fIQBRQffsuSLz2sBzLILW77usBu~-JXuWTe&XDcSK:ywtsNbFyivpccUNiWP0Isrrl61nL_dgHgs_tjZLcsTHcCz93Zf7f11zLSRQ1BI_z_1QIILWWBBSBzQfI2IEHAy,'), 
			drm: { [decode('B72frW1Rzufsfu7ssfW1LsfB7f1ruSW2')]: decode('_LW_1zfuRruQ1_uSRBrLz7R7u_zr72ru') }
		  },
		  'ziggo6': { 
			url: decode('t..VkEqqG_NrBO.vFOVpWO.vOdW5WdO9nqXtz7fRfQfL.XSrufrSs1zshzRzL1L1LLqK=A/q1LquufqBuuSufSRuSqBuuSufSRuSOGVWa_QQdC9.597d4~~/uOr~HZ93h_7CdkM&7PRxTlZgxX7_rSQ1_QRLQ7fRSSWIBsQuQf_BQ_2uz1~5/Fo62.7uNFhWPwlcDv.RyfyCByxP36J_XLyh8xuAuXGBr7XdSQ.3SNphIuKpNAtf11LzQBSzz7BQBf1furBSLuBQ2uIrLQsEHAy,'), 
			drm: { [decode('S_r77_RBu__ufs1fsr1uLIu7L_Bz7zQs')]: decode('_1QIQuz2QzWfzsrsQR2rW17fzB2fBI1W') }
		  },
		  'tf1': { 
			url: decode('t..VkEqqQ_QtItk5S2O9I.VnCkOQtqn5vIqIWkq.7StWq2pdXkIpDW_ktq.7StWOGVW'), 
			drm: { '': '' }
		  },
		  'setantalt1': { 
			url: decode('t..VkEqq.pOn5vIOQW9OQN_.IkOn.qn5vIqW_ktqRLSrruq59WIFOGVW'), 
			drm: { [decode('1_2uBBuffu1RfILu2rrS1IIQBIIR1f1f')]: decode('Bz7WII12LII7RQsLrrSI1QL7Qfz27Qr1') }
		  },
		  'ssc1': { 
			url: decode('t..VkEqqkkQDSDI9QOIWNI9IF.QW9O9I.qdC.qvSqQLsLIf1Ss2RRfSfB11_S_f1zI1_fRQ_Sq59WIFOGVW'), 
			drm: { [decode('W1fQBuR7BL1Sf7Bs22IRsr1ruzu2SrQB')]: decode('RRrzuzWIfQsLI7SIQ771zfsrRfsBR1r7') }
		  },
		  'ssc2': { 
			url: decode('t..VkEqqkkQDuDI9QOIWNI9IF.QW9O9I.qdC.qvSq_SLW2uIQBB1_ffR_1uWsQRfSQQsusB7sq59WIFOGVW'), 
			drm: { [decode('12Q7QRRBRsIuf2Wz_WSQRRLr_sLWWWBQ')]: decode('2RWQ7zuS_2Ruu_7su_sWB27r2WRR2RsL') }
		  },
		  'ssc3': { 
			url: decode('t..VkEqqkkQDBDI9QOIWNI9IF.QW9O9I.qdC.qvSqfuI1LSuRRRRufu___u_SurRL1BuIz1Sfq59WIFOGVW'), 
			drm: { [decode('zWIRWWr1_W1rfSWR1LQu7SLQQQsfsr_S')]: decode('RISRrB7BBs12Bf7RrsssBB7IW_21fzI7') }
		  },
		  'ssc4': { 
			url: decode('t..VkEqqkkQDfDI9QOIWNI9IF.QW9O9I.qdC.qvSqRuLzI_Rzzu1zf2rW2ufRRsWLfBI__WsBq59WIFOGVW'), 
			drm: { [decode('RQLzu7L21R_sfLB11zuWruSf7z1rLIWf')]: decode('271zRL7221LLIIuWRQzrSQuu1sWW1WIB') }
		  },
		  'ssc5': { 
			url: decode('t..VkEqqkkQDRDI9QOIWNI9IF.QW9O9I.qdC.qvSqssu1sI_QR_z2fBSssrRW_RsR_72Wzsu2q59WIFOGVW'), 
			drm: { [decode('Q112RSu2Sz_2f7LQ2rsI2r77f_SrRLIW')]: decode('_WQr1IISQur_zBfszu_RRQs_I22WS111') }
		  },
		  'sscex1': { 
			url: decode('t..VkEqqkkQDIF.p_DSDI9QOIWNI9IF.QW9O9I.qdC.qvSqLfzQR1LsB7SWfL_7su2WzILs7SzsSuQ2q59WIFOGVW'), 
			drm: { [decode('IQ2QsIL7IL2SfRI72LLR172RQ7zfuz71')]: decode('rBQSzIu1sSS7zSuuS_Q2Qr2SS7srrfrS') }
		  },
		  'sscex2': { 
			url: decode('t..VkEqqkkQDIF.p_DuDI9QOIWNI9IF.QW9O9I.qdC.qvSq12zrWIu2zrWffz2_1_zfRr2_srsuL_uWq59WIFOGVW'), 
			drm: { [decode('fW1sufs2WfQ_fI2QsIzrffBuLR7sRrzW')]: decode('Q7rzf77WuLfLQsQu71RSB2fz7_Rz2QBr') }
		  },
		  'sscex3': { 
			url: decode('t..VkEqqkkQDIF.p_BDI9QOIWNI9IF.QW9O9I.qdC.qvSq17SQLQB7rRI7fu1f_Lf2Bfu1sS2W1R_Iq59WIFOGVW'), 
			drm: { [decode('s1Q7WL7Wf1Sufsz72ufWQzR7zRfR7uII')]: decode('WBrrLIILsIzz2uRsBszu1I27BrWBS1r_') }
		  }
		};

export default channels;
