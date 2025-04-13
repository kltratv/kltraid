
function decode(encrypted) {
    const key = { '1': 'a', 'R': 'b', 'r': 'c', ':': 'd', 'L': 'e', 'y': 'f', '2': 'g', 'o': 'h', '?': 'i', 's': 'j', 'P': 'k', 'p': 'l', 'i': 'm', 'G': 'n', 'k': 'o', 'V': 'p', 'j': 'q', 'd': 'r', 'N': 's', 'q': 't', '5': 'u', '9': 'v', 'n': 'w', 'c': 'x', 'm': 'y', 'U': 'z', '-': 'A', 'W': 'B', 'e': 'C', 'Y': 'D', 'H': 'E', '3': 'F', '.': 'G', 'K': 'H', '4': 'I', 'X': 'J', 'I': 'K', 'v': 'L', 'b': 'M', '7': 'N', 'S': 'O', '&': 'P', 'Q': 'Q', 'O': 'R', '6': 'S', 'x': 'T', 'D': 'U', '8': 'V', 'T': 'W', 'A': 'X', 'f': 'Y', 'Z': 'Z', 'u': '0', 'h': '1', 'w': '2', 'l': '3', 'J': '4', '0': '5', 'M': '6', '/': '7', 'E': '8', '=': '9', 'B': '.', 'g': '_', 'a': '-', 'C': '/', 'z': ':', 't': '&', '_': '?', 'F': '=' };
    return encrypted.split('').map(char => key[char] || char).join('');
}

		// Channel data - add more channels if needed
		const channels = {
		  'rcti': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCOex4aYYCN1g:1Nog9icCOex4aYYBiV:'), 
			drm: { [decode('=R1lLh0lLyE=0M:MLwRuMEJyry/Jy0Ey')]: decode(':RrwErR0rMJwMuEuy=EJ10RM:JlMRRlu') }
		  },
		  'mnc': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCb7ex8aKYCN1g:1Nog9icCb7ex8aKYBiV:'), 
			drm: { [decode('EwELu1R1=Ew0rl0JM1wElhLJrurlMy/y')]: decode('yE0:l:r:lE=EhlME1Rl:10=/L=/LR:rr') }
		  },
		  'gtv': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC.x8aKYCN1g:1Nog9icC.x8aKYBiV:'), 
			drm: { [decode('EEyMr/rR:/=ll/JrR0yhw:/LwM:r:MlR')]: decode('LEw:11/r/RyRul:==lw/JMly:R:l/llM') }
		  },
		  'inews': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC?7LnNx8aKYYCN1g:1Nog9icC?7LnNx8aKYYBiV:'), 
			drm: { [decode('1lhry0hlM/E=0hJR/LhwR=rr==lu/rEJ')]: decode('=EuL0J:M/hyyrwRwyJry0JL/0r1Lu1rw') }
		  },
		  'rtv': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCOx8CN1g:1Nog9icCOx8BiV:'), 
			drm: { [decode('lulEJLL0JwJL1RJ1y:yylJ:/10=LuLy=')]: decode('0yl:wywrh=JwMM1L=1wEwhuyE=/MrRLu') }
		  },
		  'sindonews': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCb7eGLnNaKYYCN1g:1Nog9icCb7eGLnNaKYYBiV:'), 
			drm: { [decode('wMrrlLllJlE0E:l=EMlwwyhMLhuR0Ewl')]: decode('u1:/l0L/u/Lhr/=Rr00uLy1J=ywL1JR:') }
		  },		  
		  'trans7': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCxd1GN/awCN1g:1Nog9icCxd1GN/awBiV:'), 
			drm: { [decode('wMR:MuLulRRL:/Eh=LL1uRw/u/01hE=/')]: decode(':wwhR1M1M1RMMLluElruuh:wrJ1lL0r0') }
		  },
		  'transtv': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCxd1GNx8awCN1g:1Nog9icCxd1GNx8awBiV:'), 
			drm: { [decode('llJ=0u/EhyMu1MMy0L0ElwJR/u1rM/0:')]: decode('/lr1r1=/RLE===rL=ryLRlR1R1:EMM=:') }
		  },
		  'tvone': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCx8SGLawCN1g:1Nog9icCx8SGLawBiV:'), 
			drm: { [decode('=uwuJru00J0y=01wMwRRu:l1rJ0:LE/u')]: decode('uLEuyw1h=y:yE:1J/MRyM=0r:=0/uRRw') }
		  },
		  'kompas': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCIkiV1Nx8CN1g:1Nog9icCIkiV1Nx8BiV:'), 
			drm: { [decode('J=ly:huLMu=::uw1L=/=MJyJlEL/L0lu')]: decode('M=0ry=E=MhEwr0wyhrl1w0EwuL///Ey0') }
		  },
		  'antv': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC-7x8CN1g:1Nog9icC-7x8BiV:'), 
			drm: { [decode('JlhuL:RER=yyL/=1RRJuR1r1y1//ELrl')]: decode('1LRR/LEM:E1llM:=1=l:l::E1Jhh0lry') }
		  },
		  'mdtv': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC7Lqx8aKYCN1g:1Nog9icC7Lqx8aKYBiV:'), 
			drm: { [decode('MR/RRryh:0hh10MLMRlrL:1l=wLJy1ll')]: decode(':h/MMwJJ:/rhrJJLy:JrM/11y1LlLL/R') }
		  },
		  'tvri': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC&LiLdN1q5W1G2N1CN1g:1Nog9icC&LiLdN1q5W1G2N1BiV:'), 
			drm: { [decode('r1M01y=u1:r0Ll::RhEuLhMJwMRRM/:1')]: decode('RMyE/1l1hwE:R:/0L1:ulMy0=ML:L1L/') }
		  },
		  'ar1': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1hBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar2': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1wBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar3': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1lBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar4': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1JBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar5': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG10BiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar6': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1MBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'arp1': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopN/C1NgVdLi?5ihBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'arp2': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopN/C1NgVdLi?5iwBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'arp3': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1NgVdLi?5ilBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'ar1x2': { 
			url: decode('oqqVNzCCnLRq9NqdL1iBRoqLpLrkiBR1CopNMC1dLG1ghcwBiV:_GFydkR?GNciLmm'), 
			drm: { [decode('rhERM11/l=RLJruR//JMu0yryR0:MRME')]: decode('LJhrl1My/0lwRwLl1EwE:=0EuhwJrE=:') }
		  },
		  'arena1cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1hgGC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'9002ec8c3dbc55c5bccdcd6871d80fd0': '7099325123bae7810db508727bb0bc7d',
            	'c43c83acda60593d8e3607efd5010d7d': '526f4a760ef52ab85056fbc10ea27584',
            	'712090aae2065c21951b170bc3002330': 'a97774e4175b80205c3cf104e9574208' 
            }
		  },  
		  'arena2cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1wC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'c5e5ac1b3cc15fe790f1bc96535fe329': '3defe59c38079ccad25a436200ad3bd7',
            	'b2f22f5d7ca35910a73fbabc524954de': 'd87d08fbe6505ad7099b8c258f396d15',
            	'd256b403efcc5c3db701fc696885e102': 'd46e4215e279b224e9d2a772db9c74a1' 
            }
		  },  
		  'arena3cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1lC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'3bedf4a896695958907e0984165090f0': 'a58317ffddf318f1540f31f67d95b5fb',
            	'25c3df3202005cc98c47700295be59ca': '073f5a39d84dd14a9debd1a72bb1f055',
            	'ccebefcba0a3546ba34d3fc587651708': '18f2b2027ce26867c23dcd7f57faa245' 
            }
		  },  
		  'arena4cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1JC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'77ce6938c781526e999b688992f27764': 'bf1178841770fdba74f8629f0f06d2c0',
            	'68cd661dbc8352fda000c532840f6340': '0255fb620f4f707ea7ba090058718306',
            	'89d1dc54692e5b4fb5995fc0953bf5bf': '31b8953ab60b90fefc93d9bd1b806fbc' 
            }
		  },
		  'arena5cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG10C:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'34a709bbeac052f293c778c0770829fd': '2b801fde1ad4839d4080d6ec6b0ec4ce',
            	'e473ec5d96f45a9f9a22eb665b5b1ea9': 'ace54ce15b69d249b00395c9e6b85b90',
            	'18d3fba08f3152c38f14151219fa9792': '78b0c5b961351e482be81287466ecb08' 
            }
		  },
		  'arena6cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1MC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'b3b60e79989a5b2799fa3a2394b8749f': 'a25d21e333dad3d131f126b7b57730be',
            	'bfd8ff04a3625fcea8335c9575401697': '769d61a2d6fd7030a5088df2e70c2654',
            	'5a86e42c58cf5d008546861c0f0fb22a': '67b1172a05bcb38a91a304d7098ce7f5' 
            }
		  },
		  'arena7cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1/C:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'5998265ef8fc5748822fef96229831aa': '9110b6be31b4bbdce67374bae3395269',
            	'5d4b5005dbd355559b3c7fe4dae1fb05': '10e65a5b74158216190e654cdf05b584',
            	'5244c72f4f5d5e1a8778fc93906c9cb3': '4c14a6a924ef7fb32534dd590d99d499' 
            }
		  },  
		  'arena8cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1EC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'c6fc5b27b74e5b8e82ca19da484eb174': '51f8fd5eef736dccaea9235b621731e7',
            	'b9e9546bc9ba52d1a75fba9222efa7f5': '2cec65c6b79be6c2d4481c6e0ef79bfc',
            	'ca202ac1353a5c6b9960bdbb82f88efc': '7ef86abd9a62042858370852836c50b4' 
            }
		  }, 
		  'arena9cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1=C:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'91a56f5aab4c56cb88fbf787187acafe': '0000816079a5ec4f093e3274bda26f2a',
            	'a2ff372a21b35653a88592abfec3f9a7': 'd5bc25088d1fda12849aad90716de750',
            	'7ecfd12eb26258c381afadac16ac8fc9': 'b4f351533d633abf76cda47fe75d579b' 
            }
		  }, 
		  'arena10cr': { 
			url: decode('oqqVNzCCRVr:Gi1GVdk:BGLcqq9BoqBodCRVPaq9C1dLG1huC:Ly15pqC?G:LcBiV:'), 
			drm: { 
              	'ee6860a6bf7a5f6c89bcf1794d16e25f': 'b573f718f1551d2cf2a335ca778f5604',
            	'03ed75ef7e4c56cb8f81cc17952fc554': '2be3b8e9f4756601e5b263beb14c5908',
            	'ea5736047df25edbb48bd055d48eb3dd': '8b40d3a415517224245a79e907cb8ef0' 
            }
		  },
		  'sportsk1': { 
			url: decode('oqqVNzCC:1NowB1Gq?PBNPCNqdL1iCG9?:?1gNVkdqghCVp1mp?NqgrLGrBiV:'), 
			drm: { [decode('hhwwllJJ00MM//EE==uuhhwwllJJ00MM')]: decode('JREu/wJ:uLyEMRrRwrwhy/===:M//l=:') }
		  },	  
		  'spoid1': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC6&Sx8aKYCN1g:1Nog9icC6&Sx8aKYBiV:'), 
			drm: { [decode('0/:w1r=whuryRr1l0=MrrM/=1uhrERw=')]: decode(':0Ll0ruyl=r/M1:ywJE0l:/L1hEr/hL/') }
		  },
		  'spoid2': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NC6&Sx8waKYCN1g:1Nog9icC6&Sx8waKYBiV:'), 
			drm: { [decode('0/:w1r=whuryRr1l0=MrrM/=1uhrERw=')]: decode(':0Ll0ruyl=r/M1:ywJE0l:/L1hEr/hL/') }
		  },
		  'spoph1': { 
			url: decode('oqqVNzCCjVaVp:qap?9La2dVahhaVdk:B1P1i1?UL:BGLqCk5qC5C:dgNVkq9o:BiV:'), 
			drm: { [decode('Lr/LLw/:El/MJLJREJ0rJErr1lhrELLy')]: decode('=ruLJh=hwulyrrRuy:LlJLLw====hw=L') }
		  },
		  'spoph2': { 
			url: decode('oqqVNzCCjVaVp:qap?9La2dVahlaVdk:B1P1i1?UL:BGLqCk5qC5C:dgNVkq9wo:BiV:'), 
			drm: { [decode('/LL1/w:Mu/0wJ01==LLlw00Mul:0EE0l')]: decode('MEJELyMu0/00/=RyJ:Jh0:Rhulwh0lL:') }
		  },
		  'tnt1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LCrp?LGqNC:1NoCLGrCnyE5N120hLCk5qC9hCR:lRurlhJyyyJRRh1RJM=ll0Eylr:w:lCrLGrBiV:'), 
			drm: { [decode('1LwMEJ0R:llulE1=ru//J1u=Ehuu/w=J')]: decode('Ml1rMMw::LlhuryRJrrMy=RJlRlJh=M:') }
		  },
		  'tnt2': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LCrp?LGqNC:1NoCLGrCyuj9Pdd1EsCk5qC9hCyEy1h/yuE/0MJy0h11J:0r/uuRLJlLrJCrLGrBiV:'), 
			drm: { [decode('M:h/uERhE0rMrJ:/Rl/Muu0wur/rr=lr')]: decode('h11rLu0y0E:EL:Ly=M=/y:0wrRu=yJJh') }
		  },
		  'tnt3': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LCrp?LGqNC:1NoCLGrCpN:1NR92p9Ck5qC9hCRR0JE1lMwMr:J/uE1yRR=J10E:/h:rL=CrLGrBiV:'), 
			drm: { [decode('JL==l11Erhyw=0yER=JLEL=LMyM:uRyL')]: decode('EM1hL:ML=Mr11RELRhuu=yL0lu:wryJy') }
		  },
		  'tnt4': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LCrp?LGqNC:1NoCLGrC?wVrsdJVL0Ck5qC9hC=hwL=:R0M:/0JulRE1=1ru1/h=hhuylMCrLGrBiV:'), 
			drm: { [decode('Llh101Ehr1yy0:u/L1wJhh10/hyrwL0=')]: decode('=Mr0LyM=J/=/lw1L/lJy=Mw/JErh=/w=') }
		  },
		  'tnt5': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LCrp?LGqNC:1NoCLGrC2LN:nd:GrGCk5qC9hC/=L/0wyhLrr:JLhERM1E=uJ1uRruhyw:CrLGrBiV:'), 
			drm: { [decode('Muru:=RJhJ/0Luh:RJyyR=hL:00/yRrr')]: decode('lMLLJuL0E=JEr1h0Llr1R1E:J/REylJR') }
		  },
		  'fox1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC?1:aG?qdkCp?9LCrp?LGqNC:1NoCLGrCkRkcL0lnmkCk5qC9hCy/E=w1=:/uM:Jh=1EJM:/lEy1wwL1llLCrLGrBiV:'), 
			drm: { [decode('wyR:11lRL1u:ulwl1LuhhRlhE:h:R/hM')]: decode('E/wMLy/L1y0R=:rLh0yRM11=yEuR:0ly') }
		  },
		  'fox2': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC?1:aG?qdkCp?9LCrp?LGqNC:1NoCLGrCqLVsjLshmNCk5qC9hCr=r=h0=R1LL/J=1h=MhwRh0=EJ=0E0=1CrLGrBiV:'), 
			drm: { [decode('EElMyRuJ:Mw:rMJr=yE1l=LyEMJu:0LR')]: decode(':Jyu0rL0Mr0wlhR/r:y0lJ00RL10EMwh') }
		  },
		  'fox3': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC?1:aG?qdkCp?9LCrp?LGqNC:1NoCLGrCnmR2UukddECk5qC9hCwyM:hMhw1R:JJy0EEl=h/yE10E0R=00yCrLGrBiV:'), 
			drm: { [decode('hhrErhrwLyulE0ryhLMJ:JJRR=rl1l=0')]: decode('0/M=/luyyR:rJRwy:E=J0=w=:=1rLuMl') }
		  },
		  'ad1': { 
			url: decode('oqqVNzCC5NLpLrqkdBr:GB?Gq?2d1pakqqBGLqC-Y6&hC-Y6&hB?NipCi1G?yLNqBiV:'), 
			drm: { [decode('LR01l1JEylLh=h1uuLl1rhLw:J/urJ=h')]: decode('wrER/h=E0Ml0w/L0wJ:MMMwEru=wLyhy') }
		  },
		  'ad2': { 
			url: decode('oqqVNzCC5NLpLrqkdBr:GB?Gq?2d1pakqqBGLqC-Y6&wC-Y6&wB?NipCi1G?yLNqBiV:'), 
			drm: { [decode('Lyr1=lw/wR=:lJy0ry=:E0=EyJlRL0L1')]: decode('00L0yLJE=L=rhEyMr=/=rlhwM:JRryL:') }
		  },
		  'soccerchannel': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCNkrrLdro1GGLpaqLNqCN1g:1Nog9icCNkrrLdro1GGLpaqLNqBiV:'), 
			drm: { [decode('J:lEuMuRyJhRlrw=:yuLr=0uLrLMR0:1')]: decode('/LL=0uMRhlJEuJ=h:/=R/hruMw1R0lMM') }
		  },
		  'sportstar1': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCb7e6VkdqNaKYCN1g:1Nog9icCb7e6VkdqNaKYBiV:'), 
			drm: { [decode('0lhrM:0uLlL=y=R1MMJJMyMwJyJ=wwE=')]: decode(':/M=:=1LwlER::JwJyERr:r:r=1lEuhy') }
		  },
		  'sportstar2': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCb7e6VkdqNwaKYCN1g:1Nog9icCb7e6VkdqNwaKYBiV:'), 
			drm: { [decode('J0yLr=hrLhyh=RMRhylh:M=:ry11yMr:')]: decode('EJlLwwE1Rhu=L=11MrJEwwLLJ1:u0:/:') }
		  },
		  'usaceast': { 
			url: decode('oqqVNzCCyNpmBNqdL1iBVL1rkrPq9BrkiCekGqLGqCeb-3gSvhaexOaJNCv?9LCro1GGLp(5N1aL1Nq)Ci1NqLdBiV:'), 
			drm: { [decode('=hRyw:EhR=Lhl/uh1rMM/=h0MJhhwhRE')]: decode(':urrwuEwhlwRJlu1:01ERrJylhr=R//w') }
		  },
		  'usacwest': { 
			url: decode('oqqVNzCCyNpmBNqdL1iBVL1rkrPq9BrkiCekGqLGqCeb-3gSvhaexOaJNCv?9LCro1GGLp(5N1anLNq)Ci1NqLdBiV:'), 
			drm: { [decode('lll=MwLlLhlEl0w=EM/1=1uLwE10L0:h')]: decode('0:lyrRL:0l/J=LLMwwL:uLMJylhrhrRy') }
		  },
		  'peacock1': { 
			url: decode('oqqVNzCCyNpmBNqdL1iBVL1rkrPq9BrkiCekGqLGqCeb-3gexOaJNCv?9LCro1GGLp(9rhuwhGu/s)Ci1NqLdBiV:'), 
			drm: { [decode('uuwuJMr=1J=R=1Rhr:RMMhMRLr0:wMrl')]: decode(':wy=wyMR/L:r=1h1u0:l=lR1urwuLy=L') }
		  },
		  'peacock2': { 
			url: decode('oqqVNzCC1P1iBNqdL1iBVL1rkrPq9BrkiCekGqLGqCeb-3gexOaJNCv?9LCro1GGLp(9rhuwhGu/s)Ci1NqLdBiV:'), 
			drm: { [decode('uuwuJMr=1J=R=1Rhr:RMMhMRLr0:wMrl')]: decode(':wy=wyMR/L:r=1h1u0:l=lR1urwuLy=L') }
		  },
		  'peacockev1': { 
			url: decode('oqqVNzCC2uulaNpLa5Nari1yaVd:aryBr:GBVL1rkrPq9BrkiCrkuhCekGqLGqCeb-3g6waexOaJNa9wCv?9LCro1GGLp(0uhJ/wEa/hMhwMaJEy=0hy1y0L)Ci1NqLdBiV:'), 
			drm: { [decode('uuwwu:JLRMMh1:=Rl::JrJllJl=yr/L:')]: decode(':JhhwML=1M0lu10Eww/LlEL=MM0rh:rL') }
		  },
		  'dazn1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCRiGLpk0r/1Ck5qC9hClrLwr:rJ0E=yJMhE=lwwR:l/h/r//=0/CrLGrBiV:'), 
			drm: { [decode('JJ::=r:l/uRuE1EMEL1:hh0yLEJLry:L')]: decode('Ryyh=1Ru10hryhJLEJElE=Rh0w=hly:u') }
		  },
		  'dazn2': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCcGPJi=RGcqCk5qC9hCJrL:/R/lw=10JM0wR=RRu0whL:lER:J:CrLGrBiV:'), 
			drm: { [decode('uL1R01lylLlRJR10:Jw:Jur1lu:h/0/h')]: decode('ylyuMh:L:=R/uLEhMu0=u:0EuwLr:1M:') }
		  },
		  'dazn3': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCUmhLL0NNoVCk5qC9hCR:ryy1M=y1lRJylRRl0M=r=r/lLLhruhCrLGrBiV:'), 
			drm: { [decode('R1:ELyyyMEEru:RRl/hhLJ1/hhJrww1l')]: decode('MR1EuuM/lRwu//MrurE0uhlu:J0Lh=wu') }
		  },
		  'dazn4': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrC5V/jVnro=RCk5qC9hC1M:0:h1hwE/RJE=lRE0=rw:MrrywrM0:CrLGrBiV:'), 
			drm: { [decode(':w/huJ:Jw/LJyE/L/0Rh=l=01=yE/=MR')]: decode('/wl0=lr/uLw:JrJEMw/0Jl=ELEuhMEyE') }
		  },
		  'daznla1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCns2PpRq9ooCk5qC9hCM0=/lM1hLwJrJuLJEM01Euyy:/0L/:L/CrLGrBiV:'), 
			drm: { [decode('Jl:hrlRw0wu/yylERwwrryLh/:luwlM/')]: decode('/RhyE0yMLEhu0=J/lRhhJrhM1w0rEw=1') }
		  },
		  'daznla2': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCnk5s9PyGiGCk5qC9hChJhR0wyuE1hLJL=/E0uwh=/w=LLJE:rECrLGrBiV:'), 
			drm: { [decode('uRhy:L1LLlyyr0hL=1MMryh=lE:0/11y')]: decode('wELlrREE1R/RJ/MREh1RE11uMwJrJ:/h') }
		  },
		  'daznf1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqC:5RaG?qdkCp?9LCrp?LGqNC:1NoCLGrCrjRr92PRElCk5qC9hCJ:RLu0LryRh0JuJJE:Ew:MELLLRyRRhrCrLGrBiV:'), 
			drm: { [decode('huMhRLhw:lulwJ/JwMLrw0LElM=RwMJ/')]: decode('R:MwwRuLMhuw=0:LlRuRrrRE0urr1111') }
		  },
		  'tel': { 
			url: decode('oqqVNzCCp?9LakGL1VVaVd:aGLnNB1P1i1?UL:BGLqCekGqLGqCeb-3gSvhaexOaJNCv?9LCro1GGLp(T676)Ci1NqLdBiV:'), 
			drm: { [decode('/:MRR=yEMLhllLJrRllJJuRJ=lRMRM/w')]: decode('0EJ1:wE0:rR=L/:JwrylL=lyhrrlyLhh') }
		  },
		  'univ': { 
			url: decode('oqqVNzCCp?9LakGL1VVaVd:aGLnNB1P1i1?UL:BGLqCekGqLGqCeb-3gSvhaexOaJNCv?9LCro1GGLp(5G?9LdNkaL1Nq)Ci1NqLdBiV:'), 
			drm: { [decode('wlw:/hRRuhl:l=yyR=wLLEr0/MyR/LEL')]: decode('uE/JuE1JERLE:0/uJMrlEMERl/L1=uR1') }
		  },
		  'daznde1': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LC:1NoCLGrCPw:rnGpV2dCk5qC9hCu0uw:r/l1wJRJl1/=ruJwRyw:hJyMREJCrLGrBiV:'), 
			drm: { [decode('ur=uu1/L1Luu=/Lu=//hJhRMEr=RyyrJ')]: decode('y10lJLM:JELrry=u01JJ=u0h10LwEurE') }
		  },
		  'daznde2': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCpodaG?qdkCp?9LC:1NoCLGrCn:cidcP:/uCk5qC9hClR=JyME=uJ=1Jl:uEwMJE:u=l1//y0yECrLGrBiV:'), 
			drm: { [decode('yLJLhr:wLL1=L/1r0RlM0rwMhLJhr0/r')]: decode('lE::h1u/0h11uyuJywul0MlMryuMuELR') }
		  },
		  'fubo': { 
			url: decode('oqqVNzCCkqqLBp?9LBypmBnnB1?9ar:GBGLqCV:caG?qdkCp?9LCrp?LGqNC:1NoCLGrClR/jn?jUPlCk5qC9hC=yhJE=0R1:r1JlLM1/hM:Ruwh:r:urlhCrLGrBiV:'), 
			drm: { [decode(':rM=RMh0=1uy=yu1JLulRlyy=hrR1r:0')]: decode(':u:rRr://wlRrJu:yuRylJr=ru=w:0hy') }
		  },		  
		  'rtlde': { 
			url: decode('oqqVNzCCVGknp?9La1B1P1i1?UL:BGLqCp?9LCdqpo:C:1NoCdqpo:BiV:'), 
			drm: { [decode('0/LJER==ylyM:Jyhly0r01y:rr1uEJr1')]: decode('w=l/=10Lw:lJu0y1:wy0:=rRL=w0EMrl') }
		  },
		  'nbc': { 
			url: decode('oqqVNzCCyNpmBNqdL1iBVL1rkrPq9BrkiCekGqLGqCeb-3gSvhaexOaJNCv?9LCro1GGLp(PGRr)Ci1NqLdBiV:'), 
			drm: { [decode('uuJ01hhELwlhyhlwMRr:RJ0l0uRhrL11')]: decode('Erhl1yRy10JL1l/1lMERERE0=uwhyMLl') }
		  },
		  'sn360': { 
			url: decode('oqqVNzCCp?9La:auwadk2LdNa5naVd:B1P1i1?UL:BGLqCk5qC9hCdaVd:CroauMaVd:ada9wC:1NoaroauMaVd:adao:C?G:LcBiV:'), 
			drm: { [decode('w/ru:y=y1wL=lhJRErJ=yEwJLhyy=:Ew')]: decode('yy0/R:lJy:LJrMuwwlE0E/=yLl=J::M:') }
		  },	
		  'snpacific': { 
			url: decode('oqqVNzCCp?9La:auwadk2LdNa5naVd:B1P1i1?UL:BGLqCk5qC9hCdaVd:CroauJaVd:ada9wC:1NoaroauJaVd:adao:C?G:LcBiV:'), 
			drm: { [decode('/10M0Ehur=rRl01r1u0J/M1yhuRyyLu0')]: decode('RM/0=:M0u01l//:rLr/ME1lLrRhrR1:u') }
		  },	
		  'snone': { 
			url: decode('oqqVNzCCp?9La:auwadk2LdNa5naVd:B1P1i1?UL:BGLqCk5qC9hCdaVd:Croau0aVd:ada9wC:1Noaroau0aVd:adao:C?G:LcBiV:'), 
			drm: { [decode(':R1:hM/wRhRyl:u1R:hrhrwhMhu0/y==')]: decode('LhhuurJLwJyuwE:J/1lML1:l/yuy:00y') }
		  },	
		  'sneast': { 
			url: decode('oqqVNzCCp?9La:auwadk2LdNa5naVd:B1P1i1?UL:BGLqCk5qC9hCdaVd:CroauhaVd:ada9wC:1NoaroauhaVd:adao:C?G:LcBiV:'), 
			drm: { [decode('yuJu//E/RJ:ElL0:R=:Rr:/Mu1Lrh/rL')]: decode('uy/rw/lMyJ=Mrw:wLrrr=LRRLw//==R=') }
		  },  
		  'mncsports': { 
			url: decode('oqqVNzCC19aroar:GBiGrGknB?:Cp?9LCL:NCb7e6VkdqNwaKYCN1g:1Nog9icCb7e6VkdqNwaKYBiV:'), 
			drm: { [decode('J0yLr=hrLhyh=RMRhylh:M=:ry11yMr:')]: decode('EJlLwwE1Rhu=L=11MrJEwwLLJ1:u0:/:') }
		  },
		  'sgaff': { 
			url: decode('oqqVNzCCq2piVuwB1P1i1?UL:BGLqCk5qC9hCEr0ul1M=MM00J:Jl=ul00EEyhu0u0LLLCi1G?yLNqBiV:'), 
			drm: { [decode('hRELLl:Rh/:lJ0J/=El1wrl::rl:wEyr')]: decode('yR0:LR0yMEEy:M/Lrwur/hh=hr/yJ0=u') }
		  },
		  'sgaff2': { 
			url: decode('oqqVNzCCq2piVuwB1P1i1?UL:BGLqCk5qC9hCML01EEE:JRyEJ/1wRL0whr00y/Ry:uErCi1G?yLNqBiV:_?:Fh0'), 
			drm: { [decode('r:yuuuhyM=l=Jw:1==uyLEh1y1lLRur:')]: decode('MRE:JRr0EMh0Jl==0JE0hLL:1//hyJh/') }
		  },	
		  'espnmx1': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9ChCk5qC5C:1NoCH6&7aKYC:Ly15pqBiV:'), 
			drm: { [decode('RRJlhhwR/R/wL=rwE/:1uLr:LrEMuM1/')]: decode('w=Ll:wM/Ehu/yu1RuRl0RM0l/r/lJyw1') }
		  },
		  'espnmx2': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9ChCk5qC5C:1NoCH6&7awaKYC:Ly15pqBiV:'), 
			drm: { [decode('=uLwLJ=hrE0u1J=101RwhRRMy1MRJ:wJ')]: decode('J:/Lll:1h=R=/hrLyJ=Ll0Lrr:R=:LuR') }
		  },
		  'espnmx3': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9ChCk5qC5C:1NoCH6&7alaKYC:Ly15pqBiV:'), 
			drm: { [decode('ul00yMJw//uEwR=uluww=E0ul0rJ=Er1')]: decode('/1EL:wu1J=0El=EM//Lwr=rr:010l1uu') }
		  },
		  'espnmx4': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9ChCk5qC5C:1NoCH6&7a&vD6aKYC:Ly15pqBiV:'), 
			drm: { [decode('MMMMu/1yuER=LL::11Lh:MrlM1lJ:ME=')]: decode('huy:rwJ1hJLEJwly0L0yyul0M=Jl=RhJ') }
		  },
		  'espncol1': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(E/0/rRu1al0EJaJur:a=uhLaE=l/r/:LR1El)Ci1NqLdBiV:'), 
			drm: { [decode('rRuuJyRhuuR:=wywl/=l0MwE=hLlwlMR')]: decode('RlLJL/J1LwuEuRhl/LMERR:uLyE1/Lu0') }
		  },
		  'espncol2': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(Mw0M/:0raw=0raJyy:a1r/Lar=/J=LE/JEEJ)Ci1NqLdBiV:'), 
			drm: { [decode('1EhLLJ1M=JyLr:M11E1MEwL0uwJRlhlr')]: decode('M:h00MELh:1R0=L/wuw1LhwL/h0u0hE0') }
		  },
		  'espncol3': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(1lE:hJuhaLLuhaJEuwaEhw1a/rRJMur=Elwr)Ci1NqLdBiV:'), 
			drm: { [decode('E1Mu:/EE=yyhwMLLhE=0ll0L=ww0JyEL')]: decode(':LhRurLh=y1EuJ1hrJ/lLRELyw:0ryM:') }
		  },
		  'espncol4': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(=0uuRyuwauuuhaJh==a1h0ua0E:r0:M=wrr1)Ci1NqLdBiV:'), 
			drm: { [decode('0J1wrhhuE0rlh0L:MyyE0rlJu1EMu=0:')]: decode('0yu:huryJ10r/LwwLwEMR/LErRJL/=yJ') }
		  },
		  'espncol5': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(Eur/J=MEa1wLyaJuu0aEMMhauJ0yL=/JuE1E)Ci1NqLdBiV:'), 
			drm: { [decode('JLhwMw=/yr/1yl0r/lMR:yyL=ELLr111')]: decode('y:Ruu=hryM/:=r0=M:RyRu/ryMyJrEy0') }
		  },
		  'espncol6': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(Rlu110hLa=/y1aJl0JaRRlEaE/hyRlMuL=EJ)Ci1NqLdBiV:'), 
			drm: { [decode('y0ElMlEwJ0wr:r1hLhrERyER=1/hl0lJ')]: decode('/:wMh=lurllu=L:wRuM:w1RRlJ1MJJhu') }
		  },
		  'espncol7': { 
			url: decode('oqqVNzCC9r:GBiGhuBLGqLpBRkCekGqLGqCY-6KCv?9LCeo1GGLp(01R0:REJawwl0aJrhua=uMMaRL=RrwLLuE/1)Ci1NqLdBiV:'), 
			drm: { [decode('=EL1hLlwww/1:r:lMhER11rwRRylMEhJ')]: decode('/w1ul1u=:llLJhwyhJ1=Ry1JLywJR0Jw') }
		  },
		  'skybunmx': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9C0Ck5qC5C:1NoC6Ifa6&SOx6awJaKYC:Ly15pqBiV:'), 
			drm: { [decode(':E:0Ewl:=w1=Ly=luM1JrrJR:MlJRJRJ')]: decode(':y=yR:11uLy=L=u0R/0yJM=wywhl1yh=') }
		  },
		  'skylamx': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9CwCk5qC5C:1NoC6Ifa6&SOx6ahMaKYC:Ly15pqBiV:'), 
			drm: { [decode('rEE:rMrMMEr1rlRJME:J1Jr/Lh/Myyl:')]: decode('h1LR/l=:LwrhJL:u1:M0Er1EuJlwuE:E') }
		  },
		  'tntmx': { 
			url: decode('oqqVNzCC1P1ap?9LhakqqB?UU?2kBq9CwCk5qC5C:1NoCx7xaKYC:Ly15pqBiV:'), 
			drm: { [decode(':r1E0=/yhwyE:M=wER00rhw=hr/RRluu')]: decode('lMrERly0h:J/JR=0yu1:1:/uE==lJlLh') }
		  },		  
		  'ziggo1': { 
			url: decode('oqqVNzCCi12ulBq9cBVd:Bq9Bk:?:kBGpCno/yJ0JrJMqn/0hMEhEEgaMw/w=EuEEC&vx8CEMCwwJClwwhwJh0=uClwwhwJh0=uBiV:_UkGLkyyNLqFut:L9PRVNFha/uuutNLd9?rLqmVLFht?rV?:FEMt1rrk5GqqmVLFhtp?i?qyp5cFahtp?i?q:5dFahtqLG1Gq4:Flhult1rrk5Gq?GykF%/H%/H8wBu%/HjRrNXogsD0e=WrZr=0=Lgn1LJJRJEM/RlJh/11/MR0:Rw:1wuyLJMr%/HIZUxTsWEjYhU:2RXsO&8vXAaq8uj?7=OWKeg?NL.dNix6OssuMk.Yq.pV6eO.Sn3lMwMryuE0ruE:uwJr/LJ11yrhErlwJJu%/HHcq4Gyk0Okl8VVT?D5Nsw?VVjD&PQ%lY%lYJ1w:wrErLhllyJluwM:uLlhREwwREJ/J%l-wuwJuMuhuhwEw=%l-Dxe%wehuuuhuullw=www%weE/BwhwBhJuBh/h%wewuwJuMuhuhwEw=%welhulg6&h6%wehuuuhuullw=www%weah%weu%weh%we%we%wew%welhulg6Vkdqh%we%we%wew%wehuuuuuJJJJJlul%weu%wehuuuuuw0u0uw00%we7YHUSY2w7xflbUHnbU4w7Ubn7sbn7xf%lY%we%we%we0%weh%weH7Yt.51d:HGrxmVLFwtOx6Fh/h/wu0lu=tydkiFhhtoiNg:L9?:FhuuEtkGp?GLFh/h/wu0lu=ti12goiNFhuuE,lhh,lu0tgFh/h/wu0lwwMwh'), 
			drm: { [decode('LylJ1L=hRJywJh0LEJl=Rw1:hu0L/JEE')]: decode('wJlwJE:E:LhyyEr/r0E/LLwu0/lh/0wl') }
		  },
		  'ziggo2': { 
			url: decode('oqqVNzCCi12ulBq9cBVd:Bq9Bk:?:kBGpCno/yJ0JrJMqnwMMhh/EEJgah=/wEh=lhMC&vx8CEMCwwJClwwhwJh0MuClwwhwJh0MuBiV:_1rrk5Gq?GykF~~8wBu~So-hY3JN9SZVVIcRaqa72nhJJrrLJJhwhrMlwEJ1ll:0J0lJ=lL0rE~hg3ip50&L9KbfGH?=ZgKAw2kI-:u8K65cZbk4r-Ar1nf9.hiLj.VwLQw4Ros9o/L0=L/yM:yl:0/ywl1lwuwJ1:M/yuyh=:rzDxe,'), 
			drm: { [decode('lry1EMw0yM0uJuMLRyM1J:hL1/l/y0/w')]: decode('u0lJL/J/r/uRlMJ11/whuLhRylh=h:yu') }
		  },
		  'ziggo3': { 
			url: decode('oqqVNzCCi12uwBq9cBVd:Bq9Bk:?:kBGpCno/yJ0JrJMqnJu/00M/u/galEh/lEhhhC&vx8CEMCwwJClwwhwJh0hhClwwhwJh0hhBiV:_1rrk5Gq?GykF~~8wBu~m8?u:bAJ?rS0I1=L=wHQy2EEhwLhrhuJJy/:l0/uMMJ/wLlLL==LyJ~w:OW=Ha9Yqk-RfphM=vRrXVcD2T8XqRLDg&po.y7DypVo9psSR081Hocd5Hxf.=jrrr1y0r0RM00Ry/0uJL:/Lr01h::/=EyzDxe,'), 
			drm: { [decode('J:RL1JR0/hl1J11h1Ll1w0JJr:0wwyr/')]: decode('1ElwlL1==Rw:Mwuu1JELhRrw/lww:0JE') }
		  },
		  'ziggo4': { 
			url: decode('oqqVNzCC:1a:JlMwlJ=wuuhuREEuuuhuluwuuuuuuuuuuuuuuuRB?:Br:GB5VrRdk1:R1G:BrkiCnVCnVJa1GVa2u0uMu0uMaoUGaGpBqhBVd:B:mGr:GB:i:N:VBrkiCp?9LC:?NPhC7vguuuu=/guh=l/uC2ka:1Noayo:a19rC7vguuuu=/guh=l/uBiV:_VFnLR'), 
			drm: { [decode('hMRy/w:rww/Jl:=w=rJlhELh=lJuEl/l')]: decode('L1L0h1hLl=uJhwJ=Mlu/JrRyJlwr/rEL') }
		  },
		  'ziggo5': { 
			url: decode('oqqVNzCCi12uJBq9cBVd:Bq9Bk:?:kBGpCno/yJ0JrJMqnEM00EMEw=gaEh=Ewhw=wC&vx8CEMCwwJClwwhwJhMhuClwwhwJhMhuBiV:_1rrk5Gq?GykF~~8wBu~v76w&WS0qmoV0Uh&LMSRW-Mr:/1JLrl0rJJ=whM/R=l/MLM:yyw=lw~WZnw:H6Kna4h&Qe3o=2.ceb9d44U2b:f-L=uujsEpM1kADA=1omOM4=HD45/GYOJyJEE/Mh0rElL1/1ErLLM::llhl/rJLRLzDxe,'), 
			drm: { [decode('lyRJu:E0/wJ=Jwy==J:EM=JlyJEuwh:R')]: decode('1M:1E/Jw0uwrE1wh0luM/y0yw1/uyRuw') }
		  },
		  'ziggo6': { 
			url: decode('oqqVNzCCi12ulBq9cBVd:Bq9Bk:?:kBGpCno/yJ0JrJMqnhuwJuh=E/=g/0/MEMEMMC&vx8CEMCwwJClwwhwJh0whClwwhwJh0whBiV:_1rrk5Gq?GykF~~8wBu~DOGYg1y5kNTKyf0SHjOASny1uhrE1r0MryJ0hh:Ll=rwrJ1lr1Rw/E~?8cIsRqyw2cg:f3j4a9q0eJe5leSfYsZ1nMegPSwxwniluynkhrqYh2dgLw&d2xoJEEM/rlh//ylrlJEJwulhMwlrRwLuMr=zDxe,'), 
			drm: { [decode('h1uyy10lw11wJ=EJ=uEwMLwyM1l/y/r=')]: decode('1ErLrw/Rr/:J/=u=r0Ru:EyJ/lRJlLE:') }
		  },
		  'tf1': { 
			url: decode('oqqVNzCCr1roLoN?hRBGLqVp5NBroCp?9LCL:NCqyho:CRdknNLda:1NoCqyho:BiV:'), 
			drm: { '': '' }
		  },
		  'setantalt1': { 
			url: decode('oqqVNzCCqdBp?9LBr:GBr21qLNBpqCp?9LC:1NoC0MhuuwC?G:LcBiV:'), 
			drm: { [decode('E1RwllwJJwE0JLMwRuuhELLrlLL0EJEJ')]: decode('l/y:LLERMLLy0r=MuuhLErMyrJ/RyruE') }
		  },
		  'ssc1': { 
			url: decode('oqqVNzCCNNrahaLGrBL:2LGLcqr:GBGLqCk5qC9hCrM=MLJEh=R00JhJlEE1h1JE/LE1J0r1hC?G:LcBiV:'), 
			drm: { [decode(':EJrlw0ylMEhJyl=RRL0=uEuw/wRhurl')]: decode('00u/w/:LJr=MLyhLryyE/J=u0J=l0Euy') }
		  },
		  'ssc2': { 
			url: decode('oqqVNzCCNNrawaLGrBL:2LGLcqr:GBGLqCk5qC9hC1hM:RwLrllE1JJ01Ew:=r0Jhrr=w=ly=C?G:LcBiV:'), 
			drm: { [decode('ERryr00l0=LwJR:/1:hr00Mu1=M:::lr')]: decode('R0:ry/wh1R0ww1y=w1=:lRyuR:00R0=M') }
		  },
		  'ssc3': { 
			url: decode('oqqVNzCCNNralaLGrBL:2LGLcqr:GBGLqCk5qC9hCJwLEMhw0000wJw111w1hwu0MElwL/EhJC?G:LcBiV:'), 
			drm: { [decode('/:L0::uE1:EuJh:0EMrwyhMrrr=J=u1h')]: decode('0Lh0ulyll=ERlJy0u===llyL:1REJ/Ly') }
		  },
		  'ssc4': { 
			url: decode('oqqVNzCCNNraJaLGrBL:2LGLcqr:GBGLqCk5qC9hC0wM/L10//wE/JRu:RwJ00=:MJlL11:=lC?G:LcBiV:'), 
			drm: { [decode('0rM/wyMRE01=JMlEE/w:uwhJy/EuML:J')]: decode('RyE/0MyRREMMLLw:0r/uhrwwE=::E:Ll') }
		  },
		  'ssc5': { 
			url: decode('oqqVNzCCNNra0aLGrBL:2LGLcqr:GBGLqCk5qC9hC==wE=L1r01/RJlh==u0:10=01yR:/=wRC?G:LcBiV:'), 
			drm: { [decode('rEER0hwRh/1RJyMrRu=LRuyyJ1hu0ML:')]: decode('1:ruELLhrwu1/lJ=/w100r=1LRR:hEEE') }
		  },
		  'sscex1': { 
			url: decode('oqqVNzCCNNraLcqd1ahaLGrBL:2LGLcqr:GBGLqCk5qC9hCMJ/r0EM=lyh:JM1y=wR:/LM=yh/=hwrRC?G:LcBiV:'), 
			drm: { [decode('LrRr=LMyLMRhJ0LyRMM0EyR0ry/Jw/yE')]: decode('ulrh/LwE=hhy/hwwh1rRruRhhy=uuJuh') }
		  },
		  'sscex2': { 
			url: decode('oqqVNzCCNNraLcqd1awaLGrBL:2LGLcqr:GBGLqCk5qC9hCER/u:LwR/u:JJ/R1E1/J0uR1=u=wM1w:C?G:LcBiV:'), 
			drm: { [decode('J:E=wJ=R:Jr1JLRr=L/uJJlwM0y=0u/:')]: decode('ryu/Jyy:wMJMr=rwyE0hlRJ/y10/Rrlu') }
		  },
		  'sscex3': { 
			url: decode('oqqVNzCCNNraLcqd1laLGrBL:2LGLcqr:GBGLqCk5qC9hCEyhrMrlyu0LyJwEJ1MJRlJwE=hR:E01LC?G:LcBiV:'), 
			drm: { [decode('=Ery:My:JEhwJ=/yRwJ:r/0y/0J0ywLL')]: decode(':luuMLLM=L//Rw0=l=/wELRylu:lhEu1') }
		  }
		};

		//(function () {
        //    const allowedHost = ['bikinbaru96.blogspot.com'];
        //    const currentHost = window.location.hostname;

        //    if (!allowedHost.includes(currentHost)) {
        //        console.error('Access denied: Unauthorized host');
        //        window.location.href = 'https://akusukagratisanlo.blogspot.com';
        //        return;
        //    }

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
						//startAtSegmentBoundary: true,
						//ignoreTextStreamFailures: true,
						rebufferingGoal: 1,
						bufferingGoal: 3,
						bufferBehind: 5,
						autoLowLatencyMode: true,
						lowLatencyMode: true,
						//jumpLargeGaps: true,
						//inaccurateManifestTolerance: 0.3,
						//stallEnabled: false
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
		//})();

		window.addEventListener('load', () => disableDevtool());
