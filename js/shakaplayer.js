
function decode(encrypted) {
    const key = { '6': 'a', 'A': 'b', 'g': 'c', 'd': 'd', 'c': 'e', '4': 'f', 'n': 'g', 'B': 'h', '9': 'i', '/': 'j', 'G': 'k', 'i': 'l', '?': 'm', 'H': 'n', 'O': 'o', 'J': 'p', 'h': 'q', 'b': 'r', '2': 's', 'N': 't', 'Q': 'u', 'W': 'v', 'K': 'w', 'm': 'x', '3': 'y', 'F': 'z', ':': 'A', 'o': 'B', '7': 'C', 'V': 'D', '&': 'E', 'T': 'F', 'E': 'G', 'R': 'H', 'L': 'I', 'y': 'J', 'Z': 'K', 'I': 'L', 'M': 'M', 'D': 'N', '8': 'O', 'k': 'P', '-': 'Q', 'Y': 'R', 'x': 'S', 'w': 'T', 'p': 'U', 'f': 'V', 'r': 'W', 'S': 'X', 'v': 'Y', 'e': 'Z', 'j': '0', 'u': '1', 'a': '2', 't': '3', '5': '4', 'U': '5', 's': '6', '.': '7', 'P': '8', 'X': '9', '_': '.', 'q': '_', 'z': '-', 'l': '/', '0': ':', '1': '&', '=': '?', 'C': '=' };
    return encrypted.split('').map(char => key[char] || char).join('');
}

		// Channel data - add more channels if needed
		const channels = {
		  'rcti': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lY7wLzVVl26qd62BqW?mlY7wLzVV_?Jd'), 
			drm: { [decode('XA6tcuUtc4PXUsdscaAjsP54g4.54UP4')]: decode('dAgaPgAUgs5asjPj4XP56UAsd5tsAAtj') }
		  },
		  'mnc': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lMD7wfzRVl26qd62BqW?mlMD7wfzRV_?Jd'), 
			drm: { [decode('PaPcj6A6XPaUgtU5s6aPtuc5gjgts4.4')]: decode('4PUdtdgdtPXPutsP6Atd6UX.cX.cAdgg') }
		  },
		  'gtv': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lEwfzRVl26qd62BqW?mlEwfzRV_?Jd'), 
			drm: { [decode('PP4sg.gAd.Xtt.5gAU4uad.casdgdstA')]: decode('cPad66.g.A4AjtdXXta.5st4dAdt.tts') }
		  },
		  'inews': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2l9DcK2wfzRVVl26qd62BqW?ml9DcK2wfzRVV_?Jd'), 
			drm: { [decode('6tug4Uuts.PXUu5A.cuaAXggXXtj.gP5')]: decode('XPjcU5ds.u44gaAa45g4U5c.Ug6cj6ga') }
		  },
		  'rtv': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lYwfl26qd62BqW?mlYwf_?Jd'), 
			drm: { [decode('tjtP5ccU5a5c6A564d44t5d.6UXcjc4X')]: decode('U4tda4aguX5ass6cX6aPauj4PX.sgAcj') }
		  },
		  'sindonews': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lMD7HcK2zRVVl26qd62BqW?mlMD7HcK2zRVV_?Jd'), 
			drm: { [decode('asggtctt5tPUPdtXPstaa4uscujAUPat')]: decode('j6d.tUc.j.cug.XAgUUjc465X4ac65Ad') }
		  },		  
		  'trans7': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lwb6H2.zal26qd62BqW?mlwb6H2.za_?Jd'), 
			drm: { [decode('asAdsjcjtAAcd.PuXcc6jAa.j.U6uPX.')]: decode('daauA6s6s6AssctjPtgjjudag56tcUgU') }
		  },
		  'transtv': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lwb6H2wfzal26qd62BqW?mlwb6H2wfza_?Jd'), 
			drm: { [decode('tt5XUj.Pu4sj6ss4UcUPta5A.j6gs.Ud')]: decode('.tg6g6X.AcPXXXgcXg4cAtA6A6dPssXd') }
		  },
		  'tvone': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lwf8Hczal26qd62BqW?mlwf8Hcza_?Jd'), 
			drm: { [decode('Xjaj5gjUU5U4XU6asaAAjdt6g5UdcP.j')]: decode('jcPj4a6uX4d4Pd65.sA4sXUgdXU.jAAa') }
		  },
		  'kompas': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lZO?J62wfl26qd62BqW?mlZO?J62wf_?Jd'), 
			drm: { [decode('5Xt4dujcsjXddja6cX.Xs545tPc.cUtj')]: decode('sXUg4XPXsuPagUa4ugt6aUPajc...P4U') }
		  },
		  'antv': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2l:Dwfl26qd62BqW?ml:Dwf_?Jd'), 
			drm: { [decode('5tujcdAPAX44c.X6AA5jA6g646..Pcgt')]: decode('6cAA.cPsdP6ttsdX6XtdtddP65uuUtg4') }
		  },
		  'mdtv': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lDcNwfzRVl26qd62BqW?mlDcNwfzRV_?Jd'), 
			drm: { [decode('sA.AAg4udUuu6UscsAtgcd6tXac546tt')]: decode('du.ssa55d.gug55c4d5gs.6646ctcc.A') }
		  },
		  'tvri': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lkc?cb26NQo6Hn26l26qd62BqW?mlkc?cb26NQo6Hn26_?Jd'), 
			drm: { [decode('g6sU64Xj6dgUctddAuPjcus5asAAs.d6')]: decode('As4P.6t6uaPdAd.Uc6djts4UXscdc6c.') }
		  },
		  'bein1': { 
			url: decode('BNNJ20ll6uaa69WONNi9Hc6bz6_6G6?69Bd_HcNl8wwol23dzH9NbOli9Wclgi9cHN2ld62BlcHglJKdWdX4?UQlOQNlWulUcaaP5Ud6Ats5PAP6.jtt4dUXatdsadulgcHg_?Jd'), 
			drm: { [decode('4XUXdgddug6PgPXsUPgdsUucdtscaPUu')]: decode('665g4Usgc.gUaa6XcsUPag5aUt.ActPu') }
		  },
		  'bein2': { 
			url: decode('BNNJ20ll6ts69WONNi9Hc6bz6_6G6?69Bd_HcNl8wwol23dzH9NbOli9Wclgi9cHN2ld62BlcHgls4AHbtc95AlOQNlWulU.da6cXs65gg5atjPPugdPjuAtPXcd4slgcHg_?Jd'), 
			drm: { [decode('X64d.a4ajU.tjjugats.adauUPPXa6U4')]: decode('XAgtad45P6ac46gtjj.aA.cUgsPtAgdu') }
		  },
		  'bein3': { 
			url: decode('BNNJ20ll6Pt69WONNi9Hc6bz6_6G6?69Bd_HcNl8wwol23dzH9NbOli9Wclgi9cHN2ld62BlcHgln9nm2Gji36lOQNlWuld4.UdPP.Agc55t.AP4d4t5U6c5UUuutAlgcHg_?Jd'), 
			drm: { [decode('5Aajttusg5.gt.j6ucAXjX.gj.jd.aas')]: decode('s.scs.Pt4at.PXgd4544j5PstPsu5Ucd') }
		  },		  
		  'ar1': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6u_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar2': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6a_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar3': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6t_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar4': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH65_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar5': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6U_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar6': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6s_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'arp1': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2.l62qJbc?9Q?u_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'arp2': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2.l62qJbc?9Q?a_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'arp3': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl62qJbc?9Q?t_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'ar1x2': { 
			url: decode('BNNJ20llKcANW2Nbc6?_ABNcicgO?_A6lBi2sl6bcH6quma_?Jd=HC4bOA9H2m?c33'), 
			drm: { [decode('guPAs66.tXAc5gjA..5sjU4g4AUdsAsP')]: decode('c5ugt6s4.UtaAact6PaPdXUPjua5gPXd') }
		  },
		  'arena1cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6uqHldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'9002ec8c3dbc55c5bccdcd6871d80fd0': '7099325123bae7810db508727bb0bc7d',
            	'c43c83acda60593d8e3607efd5010d7d': '526f4a760ef52ab85056fbc10ea27584',
            	'712090aae2065c21951b170bc3002330': 'a97774e4175b80205c3cf104e9574208' 
            }
		  },  
		  'arena2cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6aldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'c5e5ac1b3cc15fe790f1bc96535fe329': '3defe59c38079ccad25a436200ad3bd7',
            	'b2f22f5d7ca35910a73fbabc524954de': 'd87d08fbe6505ad7099b8c258f396d15',
            	'd256b403efcc5c3db701fc696885e102': 'd46e4215e279b224e9d2a772db9c74a1' 
            }
		  },  
		  'arena3cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6tldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'3bedf4a896695958907e0984165090f0': 'a58317ffddf318f1540f31f67d95b5fb',
            	'25c3df3202005cc98c47700295be59ca': '073f5a39d84dd14a9debd1a72bb1f055',
            	'ccebefcba0a3546ba34d3fc587651708': '18f2b2027ce26867c23dcd7f57faa245' 
            }
		  },  
		  'arena4cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH65ldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'77ce6938c781526e999b688992f27764': 'bf1178841770fdba74f8629f0f06d2c0',
            	'68cd661dbc8352fda000c532840f6340': '0255fb620f4f707ea7ba090058718306',
            	'89d1dc54692e5b4fb5995fc0953bf5bf': '31b8953ab60b90fefc93d9bd1b806fbc' 
            }
		  },
		  'arena5cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6Uldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'34a709bbeac052f293c778c0770829fd': '2b801fde1ad4839d4080d6ec6b0ec4ce',
            	'e473ec5d96f45a9f9a22eb665b5b1ea9': 'ace54ce15b69d249b00395c9e6b85b90',
            	'18d3fba08f3152c38f14151219fa9792': '78b0c5b961351e482be81287466ecb08' 
            }
		  },
		  'arena6cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6sldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'b3b60e79989a5b2799fa3a2394b8749f': 'a25d21e333dad3d131f126b7b57730be',
            	'bfd8ff04a3625fcea8335c9575401697': '769d61a2d6fd7030a5088df2e70c2654',
            	'5a86e42c58cf5d008546861c0f0fb22a': '67b1172a05bcb38a91a304d7098ce7f5' 
            }
		  },
		  'arena7cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6.ldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'5998265ef8fc5748822fef96229831aa': '9110b6be31b4bbdce67374bae3395269',
            	'5d4b5005dbd355559b3c7fe4dae1fb05': '10e65a5b74158216190e654cdf05b584',
            	'5244c72f4f5d5e1a8778fc93906c9cb3': '4c14a6a924ef7fb32534dd590d99d499' 
            }
		  },  
		  'arena8cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6Pldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'c6fc5b27b74e5b8e82ca19da484eb174': '51f8fd5eef736dccaea9235b621731e7',
            	'b9e9546bc9ba52d1a75fba9222efa7f5': '2cec65c6b79be6c2d4481c6e0ef79bfc',
            	'ca202ac1353a5c6b9960bdbb82f88efc': '7ef86abd9a62042858370852836c50b4' 
            }
		  }, 
		  'arena9cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6Xldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'91a56f5aab4c56cb88fbf787187acafe': '0000816079a5ec4f093e3274bda26f2a',
            	'a2ff372a21b35653a88592abfec3f9a7': 'd5bc25088d1fda12849aad90716de750',
            	'7ecfd12eb26258c381afadac16ac8fc9': 'b4f351533d633abf76cda47fe75d579b' 
            }
		  }, 
		  'arena10cr': { 
			url: decode('BNNJ20llAJgdH?6HJbOd_HcmNNW_BN_BblAJGzNWl6bcH6ujldc46QiNl9Hdcm_?Jd'), 
			drm: { 
              	'ee6860a6bf7a5f6c89bcf1794d16e25f': 'b573f718f1551d2cf2a335ca778f5604',
            	'03ed75ef7e4c56cb8f81cc17952fc554': '2be3b8e9f4756601e5b263beb14c5908',
            	'ea5736047df25edbb48bd055d48eb3dd': '8b40d3a415517224245a79e907cb8ef0' 
            }
		  },
		  'sportsk1': { 
			url: decode('BNNJ20lld62Ba_6HN9G_2Gl2Nbc6?lHW9d96q2JObNqulJi63i92NqgcHg_?Jd'), 
			drm: { [decode('uuaatt55UUss..PPXXjjuuaatt55UUss')]: decode('5APj.a5djc4PsAgAagau4.XXXds..tXd') }
		  },	  
		  'spoid1': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lxk8wfzRVl26qd62BqW?mlxk8wfzRV_?Jd'), 
			drm: { [decode('U.da6gXaujg4Ag6tUXsggs.X6jugPAaX')]: decode('dUctUgj4tXg.s6d4a5PUtd.c6uPg.uc.') }
		  },
		  'spoid2': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lxk8wfazRVl26qd62BqW?mlxk8wfazRV_?Jd'), 
			drm: { [decode('U.da6gXaujg4Ag6tUXsggs.X6jugPAaX')]: decode('dUctUgj4tXg.s6d4a5PUtd.c6uPg.uc.') }
		  },
		  'spoph1': { 
			url: decode('BNNJ20llhJzJidNzi9WcznbJzuuzJbOd_6G6?69Fcd_HcNlOQNlQldbq2JONWBd_?Jd'), 
			drm: { [decode('cg.cca.dPt.s5c5AP5Ug5Pgg6tugPcc4')]: decode('Xgjc5uXuajt4ggAj4dct5ccaXXXXuaXc') }
		  },
		  'spoph2': { 
			url: decode('BNNJ20llhJzJidNzi9WcznbJzutzJbOd_6G6?69Fcd_HcNlOQNlQldbq2JONWaBd_?Jd'), 
			drm: { [decode('.cc6.adsj.Ua5U6XXcctaUUsjtdUPPUt')]: decode('sP5Pc4sjU.UU.XA45d5uUdAujtauUtcd') }
		  },
		  'tnt1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wclgi9cHN2ld62BlcHglK4PQ26nUuclOQNlWulAdtAjgtu54445AAu6A5sXttUP4tgdadtlgcHg_?Jd'), 
			drm: { [decode('6casP5UAdttjtP6Xgj..56jXPujj.aX5')]: decode('st6gssaddctujg4A5ggs4XA5tAt5uXsd') }
		  },
		  'tnt2': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wclgi9cHN2ld62BlcHgl4jhWGbb6P/lOQNlWul4P46u.4jP.Us54Uu665dUg.jjAc5tcg5lgcHg_?Jd'), 
			drm: { [decode('sdu.jPAuPUgsg5d.At.sjjUajg.ggXtg')]: decode('u66gcjU4UPdPcdc4XsX.4dUagAjX455u') }
		  },
		  'tnt3': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wclgi9cHN2ld62BlcHgli2d62AWniWlOQNlWulAAU5P6tsasgd5.jP64AAX56UPd.udgcXlgcHg_?Jd'), 
			drm: { [decode('5cXXt66Pgu4aXU4PAX5cPcXcs4sdjA4c')]: decode('Ps6ucdscXsg66APcAujjX4cUtjdag454') }
		  },
		  'tnt4': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wclgi9cHN2ld62BlcHgl9aJg/b5JcUlOQNlWulXuacXdAUsd.U5jtAP6X6gj6.uXuuj4tslgcHg_?Jd'), 
			drm: { [decode('ctu6U6Pug644Udj.c6a5uu6U.u4gacUX')]: decode('XsgUc4sX5.X.ta6c.t54Xsa.5PguX.aX') }
		  },
		  'tnt5': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wclgi9cHN2ld62BlcHglnc2dKbdHgHlOQNlWul.Xc.Ua4ucggd5cuPAs6PXj56jAgju4adlgcHg_?Jd'), 
			drm: { [decode('sjgjdXA5u5.UcjudA544AXucdUU.4Agg')]: decode('tscc5jcUPX5Pg6uUctg6A6Pd5.AP4t5A') }
		  },
		  'fox1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNl96dzH9NbOli9Wclgi9cHN2ld62BlcHglOAOmcUtK3OlOQNlWul4.PXa6Xd.jsd5uX6P5sd.tP46aac6ttclgcHg_?Jd'), 
			drm: { [decode('a4Ad66tAc6jdjtat6cjuuAtuPdudA.us')]: decode('P.asc4.c64UAXdgcuU4As66X4PjAdUt4') }
		  },
		  'fox2': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNl96dzH9NbOli9Wclgi9cHN2ld62BlcHglNcJ/hc/u32lOQNlWulgXgXuUXA6cc.5X6uXsuaAuUXP5XUPUX6lgcHg_?Jd'), 
			drm: { [decode('PPts4Aj5dsadgs5gX4P6tXc4Ps5jdUcA')]: decode('d54jUgcUsgUatuA.gd4Ut5UUAc6UPsau') }
		  },
		  'fox3': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNl96dzH9NbOli9Wclgi9cHN2ld62BlcHglK3AnFjObbPlOQNlWula4sdusua6Ad554UPPtXu.4P6UPUAXUU4lgcHg_?Jd'), 
			drm: { [decode('uugPgugac4jtPUg4ucs5d55AAXgt6tXU')]: decode('U.sX.tj44Adg5Aa4dPX5UXaXdX6gcjst') }
		  },
		  'ad1': { 
			url: decode('BNNJ20llQ2cicgNOb_gdH_9HN9nb6izONN_HcNl:Vxkul:Vxku_92?il?6H94c2N_?Jd'), 
			drm: { [decode('cAU6t65P4tcuXu6jjct6gucad5.jg5Xu')]: decode('agPA.uXPUstUa.cUa5dsssaPgjXac4u4') }
		  },
		  'ad2': { 
			url: decode('BNNJ20llQ2cicgNOb_gdH_9HN9nb6izONN_HcNl:Vxkal:Vxka_92?il?6H94c2N_?Jd'), 
			drm: { [decode('c4g6Xta.aAXdt54Ug4XdPUXP45tAcUc6')]: decode('UUcU4c5PXcXguP4sgX.Xgtuasd5Ag4cd') }
		  },
		  'soccerchannel': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2l2OggcbgB6HHcizNc2Nl26qd62BqW?ml2OggcbgB6HHcizNc2N_?Jd'), 
			drm: { [decode('5dtPjsjA45uAtgaXd4jcgXUjcgcsAUd6')]: decode('.ccXUjsAut5Pj5Xud.XA.ugjsa6AUtss') }
		  },
		  'sportstar1': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lMD7xJObN2zRVl26qd62BqW?mlMD7xJObN2zRV_?Jd'), 
			drm: { [decode('UtugsdUjctcX4XA6ss55s4sa545XaaPX')]: decode('d.sXdX6catPAdd5a54PAgdgdgX6tPju4') }
		  },
		  'sportstar2': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lMD7xJObN2azRVl26qd62BqW?mlMD7xJObN2azRV_?Jd'), 
			drm: { [decode('5U4cgXugcu4uXAsAu4tudsXdg4664sgd')]: decode('P5tcaaP6AujXcX66sg5Paacc56djUd.d') }
		  },
		  'usaceast': { 
			url: decode('BNNJ20ll42i3_2Nbc6?_Jc6gOgGNW_gO?l7OHNcHNl7M:Tq8Iuz7wYz52lI9WclgB6HHci(Q26zc62N)l?62Ncb_?Jd'), 
			drm: { [decode('XuA4adPuAXcut.ju6gss.XuUs5uuauAP')]: decode('djggajPautaA5tj6dU6PAg54tugXA..a') }
		  },
		  'usacwest': { 
			url: decode('BNNJ20ll42i3_2Nbc6?_Jc6gOgGNW_gO?l7OHNcHNl7M:Tq8Iuz7wYz52lI9WclgB6HHci(Q26zKc2N)l?62Ncb_?Jd'), 
			drm: { [decode('tttXsactcutPtUaXPs.6X6jcaP6UcUdu')]: decode('Udt4gAcdUt.5Xccsaacdjcs54tugugA4') }
		  },
		  'peacock1': { 
			url: decode('BNNJ20ll42i3_2Nbc6?_Jc6gOgGNW_gO?l7OHNcHNl7M:Tq7wYz52lI9WclgB6HHci(WgujauHj./)l?62Ncb_?Jd'), 
			drm: { [decode('jjaj5sgX65XAX6AugdAssusAcgUdasgt')]: decode('da4Xa4sA.cdgX6u6jUdtXtA6jgajc4Xc') }
		  },
		  'peacock2': { 
			url: decode('BNNJ20ll6G6?_2Nbc6?_Jc6gOgGNW_gO?l7OHNcHNl7M:Tq7wYz52lI9WclgB6HHci(WgujauHj./)l?62Ncb_?Jd'), 
			drm: { [decode('jjaj5sgX65XAX6AugdAssusAcgUdasgt')]: decode('da4Xa4sA.cdgX6u6jUdtXtA6jgajc4Xc') }
		  },
		  'peacockev1': { 
			url: decode('BNNJ20llnjjtz2iczQ2zg?64zJbdzg4_gdH_Jc6gOgGNW_gO?lgOjul7OHNcHNl7M:Tqxaz7wYz52zWalI9WclgB6HHci(Uju5.aPz.usuasz5P4XUu464Uc)l?62Ncb_?Jd'), 
			drm: { [decode('jjaajd5cAssu6dXAtdd5g5tt5tX4g.cd')]: decode('d5uuascX6sUtj6UPaa.ctPcXssUgudgc') }
		  },
		  'dazn1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglA?HciOUg.6lOQNlWultgcagdg5UPX45suPXtaaAdt.u.g..XU.lgcHg_?Jd'), 
			drm: { [decode('55ddXgdt.jAjP6PsPc6duuU4cP5cg4dc')]: decode('A44uX6Aj6Uug4u5cP5PtPXAuUaXut4dj') }
		  },
		  'dazn2': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglmHG5?XAHmNlOQNlWul5gcd.A.taX6U5sUaAXAAjUaucdtPAd5dlgcHg_?Jd'), 
			drm: { [decode('jc6AU6t4tctA5A6Ud5ad5jg6tjdu.U.u')]: decode('4t4jsudcdXA.jcPusjUXjdUPjacgd6sd') }
		  },
		  'dazn3': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglF3uccU22BJlOQNlWulAdg446sX46tA54tAAtUsXgXg.tccugjulgcHg_?Jd'), 
			drm: { [decode('A6dPc444sPPgjdAAt.uuc56.uu5gaa6t')]: decode('sA6Pjjs.tAaj..sgjgPUjutjd5UcuXaj') }
		  },
		  'dazn4': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglQJ.hJKgBXAlOQNlWul6sdUdu6uaP.A5PXtAPUXgadsgg4agsUdlgcHg_?Jd'), 
			drm: { [decode('da.uj5d5a.c54P.c.UAuXtXU6X4P.XsA')]: decode('.atUXtg.jcad5g5Psa.U5tXPcPjusP4P') }
		  },
		  'daznla1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglK/nGiANWBBlOQNlWulsUX.ts6uca5g5jc5PsU6Pj44d.Uc.dc.lgcHg_?Jd'), 
			drm: { [decode('5tdugtAaUaj.44tPAaagg4cu.dtjats.')]: decode('.Au4PU4scPujUX5.tAuu5gus6aUgPaX6') }
		  },
		  'daznla2': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglKOQ/WG4H?HlOQNlWulu5uAUa4jP6uc5cX.PUjauX.aXcc5PdgPlgcHg_?Jd'), 
			drm: { [decode('jAu4dc6cct44gUucX6ssg4uXtPdU.664')]: decode('aPctgAPP6A.A5.sAPu6AP66jsa5g5d.u') }
		  },
		  'daznf1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNldQAzH9NbOli9Wclgi9cHN2ld62BlcHglghAgWnGAPtlOQNlWul5dAcjUcg4AuU5j55PdPadsPcccA4AAuglgcHg_?Jd'), 
			drm: { [decode('ujsuAcuadtjta5.5ascgaUcPtsXAas5.')]: decode('AdsaaAjcsujaXUdctAjAggAPUjgg6666') }
		  },
		  'tel': { 
			url: decode('BNNJ20lli9WczOHc6JJzJbdzHcK2_6G6?69Fcd_HcNl7OHNcHNl7M:Tq8Iuz7wYz52lI9WclgB6HHci(rxDx)l?62Ncb_?Jd'), 
			drm: { [decode('.dsAAX4Pscuttc5gAtt55jA5XtAsAs.a')]: decode('UP56daPUdgAXc.d5ag4tcXt4uggt4cuu') }
		  },
		  'univ': { 
			url: decode('BNNJ20lli9WczOHc6JJzJbdzHcK2_6G6?69Fcd_HcNl7OHNcHNl7M:Tq8Iuz7wYz52lI9WclgB6HHci(QH9Wcb2Ozc62N)l?62Ncb_?Jd'), 
			drm: { [decode('atad.uAAjutdtX44AXaccPgU.s4A.cPc')]: decode('jP.5jP65PAcPdU.j5sgtPsPAt.c6XjA6') }
		  },
		  'daznde1': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wcld62BlcHglGadgKHiJnblOQNlWuljUjadg.t6a5A5t6.Xgj5aA4adu54sAP5lgcHg_?Jd'), 
			drm: { [decode('jgXjj6.c6cjjX.cjX..u5uAsPgXA44g5')]: decode('46Ut5csd5Pcgg4XjU655XjUu6UcaPjgP') }
		  },
		  'daznde2': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNliBbzH9NbOli9Wcld62BlcHglKdm?bmGd.jlOQNlWultAX54sPXj5X65tdjPas5PdjXt6..4U4PlgcHg_?Jd'), 
			drm: { [decode('4c5cugdacc6Xc.6gUAtsUgasuc5ugU.g')]: decode('tPddu6j.Uu66j4j54ajtUstsg4jsjPcA') }
		  },
		  'fubo': { 
			url: decode('BNNJ20llONNc_i9Wc_4i3_KK_69WzgdH_HcNlJdmzH9NbOli9Wclgi9cHN2ld62BlcHgltA.hK9hFGtlOQNlWulX4u5PXUA6dg65tcs6.usdAjaudgdjgtulgcHg_?Jd'), 
			drm: { [decode('dgsXAsuUX6j4X4j65cjtAt44XugA6gdU')]: decode('djdgAgd..atAg5jd4jA4t5gXgjXadUu4') }
		  },		  
		  'rtlde': { 
			url: decode('BNNJ20llJHOKi9Wcz6_6G6?69Fcd_HcNli9WclbNiBdld62BlbNiBd_?Jd'), 
			drm: { [decode('U.c5PAXX4t4sd54ut4UgU64dgg6jP5g6')]: decode('aXt.X6Ucadt5jU46da4UdXgAcXaUPsgt') }
		  },
		  'nbc': { 
			url: decode('BNNJ20ll42i3_2Nbc6?_Jc6gOgGNW_gO?l7OHNcHNl7M:Tq8Iuz7wYz52lI9WclgB6HHci(GHAg)l?62Ncb_?Jd'), 
			drm: { [decode('jj5U6uuPcatu4utasAgdA5UtUjAugc66')]: decode('Pgut64A46U5c6t.6tsPAPAPUXjau4sct') }
		  },
		  'sn360': { 
			url: decode('BNNJ20lli9WczdzjazbOncb2zQKzJbd_6G6?69Fcd_HcNlOQNlWulbzJbdlgBzjszJbdzbzWald62BzgBzjszJbdzbzBdl9Hdcm_?Jd'), 
			drm: { [decode('a.gjd4X46acXtu5APg5X4Pa5cu44XdPa')]: decode('44U.Adt54dc5gsjaatPUP.X4ctX5ddsd') }
		  },	
		  'snpacific': { 
			url: decode('BNNJ20lli9WczdzjazbOncb2zQKzJbd_6G6?69Fcd_HcNlOQNlWulbzJbdlgBzj5zJbdzbzWald62BzgBzj5zJbdzbzBdl9Hdcm_?Jd'), 
			drm: { [decode('.6UsUPujgXgAtU6g6jU5.s64ujA44cjU')]: decode('As.UXdsUjU6t..dgcg.sP6tcgAugA6dj') }
		  },	
		  'snone': { 
			url: decode('BNNJ20lli9WczdzjazbOncb2zQKzJbd_6G6?69Fcd_HcNlOQNlWulbzJbdlgBzjUzJbdzbzWald62BzgBzjUzJbdzbzBdl9Hdcm_?Jd'), 
			drm: { [decode('dA6dus.aAuA4tdj6AdugugausujU.4XX')]: decode('cuujjg5ca54jaPd5.6tsc6dt.4j4dUU4') }
		  },	
		  'sneast': { 
			url: decode('BNNJ20lli9WczdzjazbOncb2zQKzJbd_6G6?69Fcd_HcNlOQNlWulbzJbdlgBzjuzJbdzbzWald62BzgBzjuzJbdzbzBdl9Hdcm_?Jd'), 
			drm: { [decode('4j5j..P.A5dPtcUdAXdAgd.sj6cgu.gc')]: decode('j4.ga.ts45XsgadacgggXcAAca..XXAX') }
		  },  
		  'mncsports': { 
			url: decode('BNNJ20ll6WzgBzgdH_?HgHOK_9dli9Wclcd2lMD7xJObN2azRVl26qd62BqW?mlMD7xJObN2azRV_?Jd'), 
			drm: { [decode('5U4cgXugcu4uXAsAu4tudsXdg4664sgd')]: decode('P5tcaaP6AujXcX66sg5Paacc56djUd.d') }
		  },
		  'sgaff': { 
			url: decode('BNNJ20llNni?Jja_6G6?69Fcd_HcNlOQNlWulPgUjt6sXssUU5d5tXjtUUPP4ujUjUcccl?6H94c2N_?Jd'), 
			drm: { [decode('uAPcctdAu.dt5U5.XPt6agtddgtdaP4g')]: decode('4AUdcAU4sPP4ds.cgajg.uuXug.45UXj') }
		  },
		  'sgaff2': { 
			url: decode('BNNJ20llNni?Jja_6G6?69Fcd_HcNlOQNlWulscU6PPPd5A4P5.6aAcUaugUU4.A4djPgl?6H94c2N_?Jd=9dCuU'), 
			drm: { [decode('gd4jjju4sXtX5ad6XXj4cPu646tcAjgd')]: decode('sAPd5AgUPsuU5tXXU5PUuccd6..u45u.') }
		  },	
		  'espnmx1': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlulOQNlQld62Bl&xkDzRVldc46QiN_?Jd'), 
			drm: { [decode('AA5tuuaA.A.acXgaP.d6jcgdcgPsjs6.')]: decode('aXctdas.Puj.4j6AjAtUAsUt.g.t54a6') }
		  },
		  'espnmx2': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlulOQNlQld62Bl&xkDzazRVldc46QiN_?Jd'), 
			drm: { [decode('Xjcac5XugPUj65X6U6AauAAs46sA5da5')]: decode('5d.cttd6uXAX.ugc45XctUcggdAXdcjA') }
		  },
		  'espnmx3': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlulOQNlQld62Bl&xkDztzRVldc46QiN_?Jd'), 
			drm: { [decode('jtUU4s5a..jPaAXjtjaaXPUjtUg5XPg6')]: decode('.6Pcdaj65XUPtXPs..cagXggdU6Ut6jj') }
		  },
		  'espnmx4': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlulOQNlQld62Bl&xkDzkIpxzRVldc46QiN_?Jd'), 
			drm: { [decode('ssssj.64jPAXccdd66cudsgts6t5dsPX')]: decode('uj4dga56u5cP5at4UcU44jtUsX5tXAu5') }
		  },
		  'espncol1': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(P.U.gAj6ztUP5z5jgdzXjuczPXt.g.dcA6Pt)l?62Ncb_?Jd'), 
			drm: { [decode('gAjj54AujjAdXa4at.XtUsaPXuctatsA')]: decode('Atc5c.56cajPjAut.csPAAdjc4P6.cjU') }
		  },
		  'espncol2': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(saUs.dUgzaXUgz544dz6g.czgX.5XcP.5PP5)l?62Ncb_?Jd'), 
			drm: { [decode('6Pucc56sX54cgds66P6sPacUja5Atutg')]: decode('sduUUsPcud6AUXc.aja6cuac.uUjUuPU') }
		  },
		  'espncol3': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(6tPdu5juzccjuz5PjazPua6z.gA5sjgXPtag)l?62Ncb_?Jd'), 
			drm: { [decode('P6sjd.PPX44uasccuPXUttUcXaaU54Pc')]: decode('dcuAjgcuX46Pj56ug5.tcAPc4adUg4sd') }
		  },
		  'espncol4': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(XUjjA4jazjjjuz5uXXz6uUjzUPdgUdsXagg6)l?62Ncb_?Jd'), 
			drm: { [decode('U56aguujPUgtuUcds44PUgt5j6PsjXUd')]: decode('U4jdujg456Ug.caacaPsA.cPgA5c.X45') }
		  },
		  'espncol5': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(Pjg.5XsPz6ac4z5jjUzPssuzj5U4cX.5jP6P)l?62Ncb_?Jd'), 
			drm: { [decode('5cuasaX.4g.64tUg.tsAd44cXPccg666')]: decode('4dAjjXug4s.dXgUXsdA4Aj.g4s45gP4U') }
		  },
		  'espncol6': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(Atj66UuczX.46z5tU5zAAtPzP.u4AtsjcXP5)l?62Ncb_?Jd'), 
			drm: { [decode('4UPtstPa5Uagdg6ucugPA4PAX6.utUt5')]: decode('.dasuXtjgttjXcdaAjsda6AAt56s55uj') }
		  },
		  'espncol7': { 
			url: decode('BNNJ20llWgdH_?Huj_cHNci_AOl7OHNcHNlV:xRlI9Wcl7B6HHci(U6AUdAP5zaatUz5gujzXjsszAcXAgaccjP.6)l?62Ncb_?Jd'), 
			drm: { [decode('XPc6uctaaa.6dgdtsuPA66gaAA4tsPu5')]: decode('.a6jt6jXdttc5ua4u56XA465c4a5AU5a') }
		  },
		  'skybunmx': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlUlOQNlQld62BlxZvzxk8Ywxza5zRVldc46QiN_?Jd'), 
			drm: { [decode('dPdUPatdXa6Xc4Xtjs65gg5Adst5A5A5')]: decode('d4X4Ad66jc4XcXjUA.U45sXa4aut64uX') }
		  },
		  'skylamx': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlalOQNlQld62BlxZvzxk8YwxzuszRVldc46QiN_?Jd'), 
			drm: { [decode('gPPdgsgssPg6gtA5sPd565g.cu.s44td')]: decode('u6cA.tXdcagu5cdj6dsUPg6Pj5tajPdP') }
		  },
		  'tntmx': { 
			url: decode('BNNJ20ll6G6zi9WcuzONN_9FF9nO_NWlalOQNlQld62BlwDwzRVldc46QiN_?Jd'), 
			drm: { [decode('dg6PUX.4ua4PdsXaPAUUguaXug.AAtjj')]: decode('tsgPAt4Uud5.5AXU4j6d6d.jPXXt5tcu') }
		  },		  
		  'ziggo1': { 
			url: decode('BNNJ20ll?6njt_NWm_Jbd_NW_Od9dO_HilKB.45U5g5sNK.UusPuPPqzsa.aXPjPPlkIwflPslaa5ltaaua5uUXjltaaua5uUXj_?Jd=FOHcO442cNCj1dcWGAJ2Cuz.jjj12cbW9gcN3JcCu19gJ9dCPs16ggOQHNN3JcCu1i9?9N4iQmCzu1i9?9NdQbCzu1NcH6HNLdCtujt16ggOQHN9H4OC%.&%.&fa_j%.&hAg2yBq/pU7XogegXUXcqK6c55A5Ps.At5u.66.sAUdAad6aj4c5sg%.&ZeFwr/oPhVuFdnAy/YkfIySzNfjh9DXYoR7q92cEb2?wxY//jsOEVNEiJx7YE8KTtsasg4jPUgjPdja5g.c5664guPgta55j%.&&mNLH4OUYOtfJJr9pQ2/a9JJhpkG-%tV%tV56adagPgcutt45tjasdjctuAPaaAP5.5%t:aja5jsjujuaPaX%t:pw7%a7ujjjujjttaXaaa%a7P._aua_u5j_u.u%a7aja5jsjujuaPaX%a7tujtqxkux%a7ujjjujjttaXaaa%a7zu%a7j%a7u%a7%a7%a7a%a7tujtqxJObNu%a7%a7%a7a%a7ujjjjj55555tjt%a7j%a7ujjjjjaUjUjaUU%a7DV&F8VnaDwvtMF&KMFLaDFMKD/MKDwv%tV%a7%a7%a7U%a7u%a7&DV1EQ6bd&Hgw3JcCa1YwxCu.u.ajUtjX14bO?Cuu1B?2qdcW9dCujjP1OHi9HcCu.u.ajUtjX1?6nqB?2CujjP,tuu,tjU1qCu.u.ajUtaasau'), 
			drm: { [decode('c4t56cXuA54a5uUcP5tXAa6dujUc.5PP')]: decode('a5ta5PdPdcu44Pg.gUP.ccajU.tu.Uat') }
		  },
		  'ziggo2': { 
			url: decode('BNNJ20ll?6njt_NWm_Jbd_NW_Od9dO_HilKB.45U5g5sNKassuu.PP5qzuX.aPuXtuslkIwflPslaa5ltaaua5uUsjltaaua5uUsj_?Jd=6ggOQHN9H4OC~~fa_j~8B:uVT52W8eJJZmAzNzDnKu55ggc55uaugstaP56ttdU5Ut5XtcUgP~uqT?iQUkcWRMvH&9XeqRSanOZ:djfRxQmeMOLg:Sg6KvWEu?chEJac-aLAB/WB.cUXc.4sd4tdU.4at6taja56ds.4j4uXdg0pw7,'), 
			drm: { [decode('tg46PsaU4sUj5jscA4s65duc6.t.4U.a')]: decode('jUt5c.5.g.jAts566.aujcuA4tuXud4j') }
		  },
		  'ziggo3': { 
			url: decode('BNNJ20ll?6nja_NWm_Jbd_NW_Od9dO_HilKB.45U5g5sNK5j.UUs.j.qztPu.tPuuulkIwflPslaa5ltaaua5uUuultaaua5uUuu_?Jd=6ggOQHN9H4OC~~fa_j~3f9jdMS59g8UZ6XcXa&-4nPPuacuguj554.dtU.jss5.actccXXc45~adYoX&zWVNO:AviusXIAgyJmpnrfyNAcpqkiBE4Dp4iJBWi/8AUf6&BmbQ&wvEXhggg64UgUAsUUA4.Uj5cd.cgU6udd.XP40pw7,'), 
			drm: { [decode('5dAc65AU.ut6566u6ct6aU55gdUaa4g.')]: decode('6Ptatc6XXAadsajj65PcuAga.taadU5P') }
		  },
		  'ziggo4': { 
			url: decode('BNNJ20lld6zd5tsat5XajjujAPPjjjujtjajjjjjjjjjjjjjjjA_9d_gdH_QJgAbO6dA6Hd_gO?lKJlKJ5z6HJznjUjsjUjszBFHzHi_Nu_Jbd_d3HgdH_d?d2dJ_gO?li9Wcld92GulDIqjjjjX.qjuXt.jlnOzd62Bz4Bdz6WglDIqjjjjX.qjuXt.j_?Jd=JCKcA'), 
			drm: { [decode('usA4.adgaa.5tdXaXg5tuPcuXt5jPt.t')]: decode('c6cUu6uctXj5ua5Xstj.5gA45tag.gPc') }
		  },
		  'ziggo5': { 
			url: decode('BNNJ20ll?6nj5_NWm_Jbd_NW_Od9dO_HilKB.45U5g5sNKPsUUPsPaXqzPuXPauaXalkIwflPslaa5ltaaua5usujltaaua5usuj_?Jd=6ggOQHN9H4OC~~fa_j~IDxako8UN3BJUFukcs8Ao:sgd.65cgtUg55Xaus.AXt.scsd44aXta~oeKad&xRKzLuk-7TBXnEm7MWbLLFnMdv:cXjjh/Pis6OSpSX6B3YsLX&pLQ.HVY545PP.suUgPtc6.6Pgccsddttut.g5cAc0pw7,'), 
			drm: { [decode('t4A5jdPU.a5X5a4XX5dPsX5t45PjaudA')]: decode('6sd6P.5aUjagP6auUtjs.4U4a6.j4Aja') }
		  },
		  'ziggo6': { 
			url: decode('BNNJ20ll?6njt_NWm_Jbd_NW_Od9dO_HilKB.45U5g5sNKuja5juXP.Xq.U.sPsPsslkIwflPslaa5ltaaua5uUaultaaua5uUau_?Jd=6ggOQHN9H4OC~~fa_j~pYHVq64QO2rR4vU8&hYS8K46jugP6gUsg45UuudctXgag56tg6Aa.P~9fmZ/AN4anmqdvThLzWNU757Qt78vV/e6Ks7qG8awaK?tj4KOugNVunbqcakbnwB5PPs.gtu..4tgt5P5ajtusatgAacjsgX0pw7,'), 
			drm: { [decode('u6j446Uta66a5XP5XjPasca4s6t.4.gX')]: decode('6Pgcga.Ag.d5.XjXgUAjdP45.tA5tcPd') }
		  },
		  'tf1': { 
			url: decode('BNNJ20llg6gBcB29uA_HcNJiQ2_gBli9Wclcd2lN4uBdlAbOK2cbzd62BlN4uBd_?Jd'), 
			drm: { '': '' }
		  },
		  'setantalt1': { 
			url: decode('BNNJ20llNb_i9Wc_gdH_gn6Nc2_iNli9Wcld62BlUsujjal9Hdcm_?Jd'), 
			drm: { [decode('P6Aatta55aPU5csaAjjuPccgtccUP5P5')]: decode('t.4dccPAscc4UgXsjjucPgs4g5.A4gjP') }
		  },
		  'ssc1': { 
			url: decode('BNNJ20ll22gzuzcHg_cdncHcmNgdH_HcNlOQNlWulgsXsc5PuXAUU5u5tPP6u65P.cP65Ug6ul9Hdcm_?Jd'), 
			drm: { [decode('dP5gtaU4tsPu54tXAAcUXjPja.aAujgt')]: decode('UUj.a.dc5gXsc4ucg44P.5XjU5XtUPj4') }
		  },
		  'ssc2': { 
			url: decode('BNNJ20ll22gzazcHg_cdncHcmNgdH_HcNlOQNlWul6usdAacgttP655U6PadXgU5uggXaXt4Xl9Hdcm_?Jd'), 
			drm: { [decode('PAg4gUUtUXca5Ad.6dugUUsj6Xsdddtg')]: decode('AUdg4.au6AUaa64Xa6XdtA4jAdUUAUXs') }
		  },
		  'ssc3': { 
			url: decode('BNNJ20ll22gztzcHg_cdncHcmNgdH_HcNlOQNlWul5acPsuaUUUUa5a666a6uajUsPtac.Pu5l9Hdcm_?Jd'), 
			drm: { [decode('.dcUddjP6dPj5udUPsga4usgggX5Xj6u')]: decode('UcuUjt4ttXPAt54UjXXXtt4cd6AP5.c4') }
		  },
		  'ssc4': { 
			url: decode('BNNJ20ll22gz5zcHg_cdncHcmNgdH_HcNlOQNlWulUas.c6U..aP.5AjdAa5UUXds5tc66dXtl9Hdcm_?Jd'), 
			drm: { [decode('Ugs.a4sAPU6X5stPP.adjau54.Pjscd5')]: decode('A4P.Us4AAPssccadUg.jugaaPXddPdct') }
		  },
		  'ssc5': { 
			url: decode('BNNJ20ll22gzUzcHg_cdncHcmNgdH_HcNlOQNlWulXXaPXc6gU6.A5tuXXjUd6UXU64Ad.XaAl9Hdcm_?Jd'), 
			drm: { [decode('gPPAUuaAu.6A54sgAjXcAj4456ujUscd')]: decode('6dgjPccugaj6.t5X.a6UUgX6cAAduPPP') }
		  },
		  'sscex1': { 
			url: decode('BNNJ20ll22gzcmNb6zuzcHg_cdncHcmNgdH_HcNlOQNlWuls5.gUPsXt4ud5s64XaAd.csX4u.XuagAl9Hdcm_?Jd'), 
			drm: { [decode('cgAgXcs4csAu5Uc4AssUP4AUg4.5a.4P')]: decode('jtgu.caPXuu4.uaau6gAgjAuu4Xjj5ju') }
		  },
		  'sscex2': { 
			url: decode('BNNJ20ll22gzcmNb6zazcHg_cdncHcmNgdH_HcNlOQNlWulPA.jdcaA.jd55.A6P6.5UjA6XjXas6adl9Hdcm_?Jd'), 
			drm: { [decode('5dPXa5XAd5g65cAgXc.j55tasU4XUj.d')]: decode('g4j.544das5sgXga4PUutA5.46U.Agtj') }
		  },
		  'sscex3': { 
			url: decode('BNNJ20ll22gzcmNb6tzcHg_cdncHcmNgdH_HcNlOQNlWulP4ugsgt4jUc45aP56s5At5aPXuAdPU6cl9Hdcm_?Jd'), 
			drm: { [decode('XPg4ds4d5Pua5X.4Aa5dg.U4.U5U4acc')]: decode('dtjjsccsXc..AaUXtX.aPcA4tjdtuPj6') }
		  }
		};

        async function init() { 
            const video = document.getElementById('video'); 
            const ui = video['ui']; 
            const controls = ui.getControls(); 
            const player = controls.getPlayer(); 
            window.player = player; 
            window.ui = ui; 
            player.addEventListener('error', onPlayerErrorEvent); 
            controls.addEventListener('error', onUIErrorEvent); 

			const urlParams = new URLSearchParams(window.location.search);
			const key = urlParams.get('channel');
			if (channels[key]) {
				const channel = channels[key];
			
				// Konfigurasi DRM
				if (channel.drm?.clearkey) {
					player.configure({
						drm: {
							clearKeys: {
								[channel.drm.clearkey.keyId]: channel.drm.clearkey.key
							}
						}
					});
				} else {
					player.configure({
						drm: {
							clearKeys: channel.drm
						}
					});
				}
			
				// Konfigurasi streaming dan manifest
				player.configure({
					streaming: {
						startAtSegmentBoundary: true,
						ignoreTextStreamFailures: true,
						rebufferingGoal: 1,
						bufferingGoal: 3,
						bufferBehind: 5,
						autoLowLatencyMode: true,
						lowLatencyMode: true,
						jumpLargeGaps: true,
						inaccurateManifestTolerance: 0.3,
						stallEnabled: false
					},
					manifest: {
						dash: {
							ignoreMinBufferTime: true,
							autoCorrectDrift: true
						}
					}
				});
			
				try {
					await player.load(channel.url); 
					console.log('The video has now been loaded!');
				} catch (error) {
					onPlayerError(error);
				}
			} else {
				console.error('Channel not found');
			}			

            // Menambahkan listener untuk fullscreen
            controls.addEventListener('fullscreen', () => {
                if (document.fullscreenElement) {
                    lockOrientationToLandscape();
                }
            });

            // Konfigurasi warna seekBar menggunakan UI config
            ui.configure({
                seekBarColors: {
                    base: 'rgba(255, 0, 0, 0.3)', // Warna latar belakang merah transparan
                    buffered: 'rgba(255, 0, 0, 0.5)', // Warna buffer merah sedikit transparan
                    played: 'red', // Warna bagian yang dimainkan
                    adBreaks: 'yellow', // Warna untuk jeda iklan
                }
            });

            // Ganti ikon menu dengan ikon gear
            const menuButton = document.querySelector('.shaka-overflow-menu-button');
            if (menuButton) {
                menuButton.innerHTML = '<i class="fas fa-cog"></i>'; // Ikon gear dari Font Awesome
            }
        }

        function onPlayerErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function onPlayerError(error) {
            console.error('Error code', error.code, 'object', error);
        }

        function onUIErrorEvent(errorEvent) { 
            onPlayerError(event.detail);
        }

        function initFailed(errorEvent) {
            console.error('Unable to load the UI library!');
        }

        function lockOrientationToLandscape() {
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch((error) => {
                    console.warn('Orientation lock failed:', error);
                });
            }
        }

        document.addEventListener('shaka-ui-loaded', init); 
        document.addEventListener('shaka-ui-load-failed', initFailed); 

		window.addEventListener('load', () => disableDevtool());
