		// Channel data - add more channels if needed
		const channels = {
		  'rcti': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd', 
			drm: { '9ba3e153ef8956d6e2b0684fcf74f58f': 'dbc28cb5c6426080f984a5b6d436bb30' }
		  },
		  'mnc': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd', 
			drm: { '828e0aba9825c3546a2831e4c0c36f7f': 'f85d3dcd38981368ab3da597e97ebdcc' }
		  },
		  'gtv': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd', 
			drm: { '88f6c7cbd793374cb5f12d7e26dcd63b': 'e82daa7c7bfb03d99327463fdbd37336' }
		  },
		  'inews': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/iNewsTV-HDD/sa_dash_vmx/iNewsTV-HDD.mpd', 
			drm: { 'a31cf5136789514b7e12b9cc99307c84': '980e54d671ffc2b2f4cf54e75cae0ac2' }
		  },
		  'rtv': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/RTV/sa_dash_vmx/RTV.mpd', 
			drm: { '30384ee5424eab4afdff34d7a59e0ef9': '5f3d2f2c194266ae9a28210f8976cbe0' }
		  },
		  'sindonews': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/MNCnews-HDD/sa_dash_vmx/MNCnews-HDD.mpd', 
			drm: { '26cc3e3343858d3986322f16e10b5823': '0ad735e707e1c79bc550efa49f2ea4bd' }
		  },		  
		  'trans7': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/Trans7-2/sa_dash_vmx/Trans7-2.mpd', 
			drm: { '26bd60e03bbed7819eea0b27075a1897': 'd221ba6a6ab66e3083c001d2c4a3e5c5' }
		  },
		  'transtv': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/TransTV-2/sa_dash_vmx/TransTV-2.mpd', 
			drm: { '334950781f60a66f5e58324b70ac675d': '73caca97be8999ce9cfeb3babad8669d' }
		  },
		  'tvone': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/TVOne-2/sa_dash_vmx/TVOne-2.mpd', 
			drm: { '90204c05545f95a262bb0d3ac45de870': '0e80f2a19fdf8da476bf695cd9570bb2' }
		  },
		  'kompas': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/KompasTV/sa_dash_vmx/KompasTV.mpd', 
			drm: { '493fd10e609dd02ae97964f438e7e530': '695cf9896182c52f1c3a25820e7778f5' }
		  },
		  'antv': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/ANTV/sa_dash_vmx/ANTV.mpd', 
			drm: { '4310edb8b9ffe79abb40bacafa778ec3': 'aebb7e86d8a336d9a93d3dd8a41153cf' }
		  },
		  'mdtv': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/NetTV-HD/sa_dash_vmx/NetTV-HD.mpd', 
			drm: { '6b7bbcf1d511a56e6b3ceda392e4fa33': 'd1766244d7c1c44efd4c67aafae3ee7b' }
		  },
		  'tvri': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/PemersatuBangsa/sa_dash_vmx/PemersatuBangsa.mpd', 
			drm: { 'ca65af90adc5e3ddb180e16426bb67da': 'b6f87a3a128dbd75ead036f596edeae7' }
		  },
		  'ar1': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena1.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar2': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena2.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar3': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena3.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar4': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena4.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar5': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena5.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar6': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena6.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'arp1': { 
			url: 'https://webtvstream.bhtelecom.ba/hls7/as_premium1.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'arp2': { 
			url: 'https://webtvstream.bhtelecom.ba/hls7/as_premium2.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'arp3': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/as_premium3.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'ar1x2': { 
			url: 'https://webtvstream.bhtelecom.ba/hls6/arena_1x2.mpd?n=frobinsxmeyy', 
			drm: { 'c18b6aa739be4c0b774605fcfb5d6b68': 'e41c3a6f7532b2e3a828d9580124c89d' }
		  },
		  'arena1cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena1_n/default/index.mpd', 
			drm: { 
              	'9002ec8c3dbc55c5bccdcd6871d80fd0': '7099325123bae7810db508727bb0bc7d',
            	'c43c83acda60593d8e3607efd5010d7d': '526f4a760ef52ab85056fbc10ea27584',
            	'712090aae2065c21951b170bc3002330': 'a97774e4175b80205c3cf104e9574208' 
            }
		  },  
		  'arena2cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena2/default/index.mpd', 
			drm: { 
              	'c5e5ac1b3cc15fe790f1bc96535fe329': '3defe59c38079ccad25a436200ad3bd7',
            	'b2f22f5d7ca35910a73fbabc524954de': 'd87d08fbe6505ad7099b8c258f396d15',
            	'd256b403efcc5c3db701fc696885e102': 'd46e4215e279b224e9d2a772db9c74a1' 
            }
		  },  
		  'arena3cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena3/default/index.mpd', 
			drm: { 
              	'3bedf4a896695958907e0984165090f0': 'a58317ffddf318f1540f31f67d95b5fb',
            	'25c3df3202005cc98c47700295be59ca': '073f5a39d84dd14a9debd1a72bb1f055',
            	'ccebefcba0a3546ba34d3fc587651708': '18f2b2027ce26867c23dcd7f57faa245' 
            }
		  },  
		  'arena4cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena4/default/index.mpd', 
			drm: { 
              	'77ce6938c781526e999b688992f27764': 'bf1178841770fdba74f8629f0f06d2c0',
            	'68cd661dbc8352fda000c532840f6340': '0255fb620f4f707ea7ba090058718306',
            	'89d1dc54692e5b4fb5995fc0953bf5bf': '31b8953ab60b90fefc93d9bd1b806fbc' 
            }
		  },
		  'arena5cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena5/default/index.mpd', 
			drm: { 
              	'34a709bbeac052f293c778c0770829fd': '2b801fde1ad4839d4080d6ec6b0ec4ce',
            	'e473ec5d96f45a9f9a22eb665b5b1ea9': 'ace54ce15b69d249b00395c9e6b85b90',
            	'18d3fba08f3152c38f14151219fa9792': '78b0c5b961351e482be81287466ecb08' 
            }
		  },
		  'arena6cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena6/default/index.mpd', 
			drm: { 
              	'b3b60e79989a5b2799fa3a2394b8749f': 'a25d21e333dad3d131f126b7b57730be',
            	'bfd8ff04a3625fcea8335c9575401697': '769d61a2d6fd7030a5088df2e70c2654',
            	'5a86e42c58cf5d008546861c0f0fb22a': '67b1172a05bcb38a91a304d7098ce7f5' 
            }
		  },
		  'arena7cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena7/default/index.mpd', 
			drm: { 
              	'5998265ef8fc5748822fef96229831aa': '9110b6be31b4bbdce67374bae3395269',
            	'5d4b5005dbd355559b3c7fe4dae1fb05': '10e65a5b74158216190e654cdf05b584',
            	'5244c72f4f5d5e1a8778fc93906c9cb3': '4c14a6a924ef7fb32534dd590d99d499' 
            }
		  },  
		  'arena8cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena8/default/index.mpd', 
			drm: { 
              	'c6fc5b27b74e5b8e82ca19da484eb174': '51f8fd5eef736dccaea9235b621731e7',
            	'b9e9546bc9ba52d1a75fba9222efa7f5': '2cec65c6b79be6c2d4481c6e0ef79bfc',
            	'ca202ac1353a5c6b9960bdbb82f88efc': '7ef86abd9a62042858370852836c50b4' 
            }
		  }, 
		  'arena9cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena9/default/index.mpd', 
			drm: { 
              	'91a56f5aab4c56cb88fbf787187acafe': '0000816079a5ec4f093e3274bda26f2a',
            	'a2ff372a21b35653a88592abfec3f9a7': 'd5bc25088d1fda12849aad90716de750',
            	'7ecfd12eb26258c381afadac16ac8fc9': 'b4f351533d633abf76cda47fe75d579b' 
            }
		  }, 
		  'arena10cr': { 
			url: 'https://bpcdnmanprod.nexttv.ht.hr/bpk-tv/arena10/default/index.mpd', 
			drm: { 
              	'ee6860a6bf7a5f6c89bcf1794d16e25f': 'b573f718f1551d2cf2a335ca778f5604',
            	'03ed75ef7e4c56cb8f81cc17952fc554': '2be3b8e9f4756601e5b263beb14c5908',
            	'ea5736047df25edbb48bd055d48eb3dd': '8b40d3a415517224245a79e907cb8ef0' 
            }
		  },
		  'sportsk1': { 
			url: 'https://dash2.antik.sk/stream/nvidia_sport_1/playlist_cenc.mpd', 
			drm: { '11223344556677889900112233445566': '4b80724d0ef86bcb2c21f7999d67739d' }
		  },	  
		  'spoid1': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/SPOTV-HD/sa_dash_vmx/SPOTV-HD.mpd', 
			drm: { '57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7' }
		  },
		  'spoid2': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/SPOTV2-HD/sa_dash_vmx/SPOTV2-HD.mpd', 
			drm: { '57d2ac9210cfbca3596cc679a01c8b29': 'd5e35c0f39c76adf24853d7ea18c71e7' }
		  },
		  'spoph1': { 
			url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd', 
			drm: { 'ec7ee27d83764e4b845c48cca31c8eef': '9c0e4191203fccb0fde34ee29999129e' }
		  },
		  'spoph2': { 
			url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd', 
			drm: { '7eea72d6075245a99ee3255603d58853': '6848ef60575579bf4d415db1032153ed' }
		  },
		  'tnt1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd', 
			drm: { 'ae26845bd33038a9c0774a0981007294': '63ac662dde310cfb4cc6f9b43b34196d' }
		  },
		  'tnt2': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd', 
			drm: { '6d1708b185c6c4d7b37600520c7cc93c': '1aace05f58d8edef9697fd52cb09f441' }
		  },
		  'tnt3': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd', 
			drm: { '4e993aa8c1f295f8b94e8e9e6f6d0bfe': '86a1ed6e96caab8eb1009fe530d2cf4f' }
		  },
		  'tnt4': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd', 
			drm: { 'e31a5a81caff5d07ea2411a571fc2e59': '96c5ef69479732ae734f962748c19729' }
		  },
		  'tnt5': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd', 
			drm: { '60c0d9b41475e01db4ffb91ed557fbcc': '36ee40e58948ca15e3caba8d47b8f34b' }
		  },
		  'fox1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/oboxe53wyo/out/v1/f7892a9d706d419a846d738fa22ea33e/cenc.mpd', 
			drm: { '2fbdaa3bea0d0323ae011b318d1db716': '8726ef7eaf5b9dce15fb6aa9f80bd53f' }
		  },
		  'fox2': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd', 
			drm: { '8836fb04d62dc64c9f8a39ef8640d5eb': 'd4f05ce56c5231b7cdf53455bea58621' }
		  },
		  'fox3': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd', 
			drm: { '11c8c1c2ef0385cf1e64d44bb9c3a395': '5769730ffbdc4b2fd8945929d9ace063' }
		  },
		  'ad1': { 
			url: 'https://uselector.cdn.intigral-ott.net/ADSP1/ADSP1.isml/manifest.mpd', 
			drm: { 'eb5a3a48f3e191a00e3ac1e2d470c491': '2c8b7198563527e524d66628c092ef1f' }
		  },
		  'ad2': { 
			url: 'https://uselector.cdn.intigral-ott.net/ADSP2/ADSP2.isml/manifest.mpd', 
			drm: { 'efca93272b9d34f5cf9d8598f43be5ea': '55e5fe489e9c18f6c979c3126d4bcfed' }
		  },
		  'soccerchannel': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/soccerchannel-test/sa_dash_vmx/soccerchannel-test.mpd', 
			drm: { '4d38060bf41b3c29df0ec950ece6b5da': '7ee9506b13480491d79b71c062ab5366' }
		  },
		  'sportstar1': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd', 
			drm: { '531c6d50e3e9f9ba66446f624f492289': 'd769d9ae238bdd424f8bcdcdc9a3801f' }
		  },
		  'sportstar2': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd', 
			drm: { '45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d' }
		  },
		  'usaceast': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-east)/master.mpd', 
			drm: { '91bf2d81b9e13701ac667915641121b8': 'd0cc2082132b430ad5a8bc4f31c9b772' }
		  },
		  'usacwest': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(usa-west)/master.mpd', 
			drm: { '333962e3e1383529867a9a0e28a5e5d1': '5d3fcbed53749ee622ed0e64f31c1cbf' }
		  },
		  'peacock1': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', 
			drm: { '002046c9a49b9ab1cdb6616bec5d26c3': 'd2f92f6b7edc9a1a05d393ba0c20ef9e' }
		  },
		  'peacock2': { 
			url: 'https://akam.stream.peacocktv.com/Content/CMAF_CTR-4s/Live/channel(vc1021n07j)/master.mpd', 
			drm: { '002046c9a49b9ab1cdb6616bec5d26c3': 'd2f92f6b7edc9a1a05d393ba0c20ef9e' }
		  },
		  'peacockev1': { 
			url: 'https://g003-sle-us-cmaf-prd-cf.cdn.peacocktv.com/co01/Content/CMAF_S2-CTR-4s-v2/Live/channel(5014728-716126-48f951faf5e)/master.mpd', 
			drm: { '00220d4eb661ad9b3dd4c433439fc7ed': 'd41126e9a6530a58227e38e9665c1dce' }
		  },
		  'dazn1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd', 
			drm: { '44dd9cd370b08a868ead115fe84ecfde': 'bff19ab0a51cf14e848389b152913fd0' }
		  },
		  'dazn2': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd', 
			drm: { '0eab5a3f3e3b4ba5d42d40ca30d17571': 'f3f061ded9b70e8160590d5802ecda6d' }
		  },
		  'dazn3': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd', 
			drm: { 'bad8efff688c0dbb3711e4a7114c22a3': '6ba800673b20776c0c850130d45e1920' }
		  },
		  'dazn4': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd', 
			drm: { 'd27104d427e4f87e75b19395a9f8796b': '723593c70e2d4c4862754398e80168f8' }
		  },
		  'daznla1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd', 
			drm: { '43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a' }
		  },
		  'daznla2': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/woujvkfnmn/out/v1/141b52f08a1e4e97850219729ee48dc8/cenc.mpd', 
			drm: { '0b1fdeaee3ffc51e9a66cf1938d57aaf': '28e3cb88ab7b476b81ab8aa0624c4d71' }
		  },
		  'daznf1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cqbcvgkb83/out/v1/4dbe05ecfb1540448d82d68eeebfbb1c/cenc.mpd', 
			drm: { '1061be12d303247426ec25e8369b2647': 'bd622b0e610295de3b0bccb850ccaaaa' }
		  },
		  'tel': { 
			url: 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(WSNS)/master.mpd', 
			drm: { '7d6bb9f86e133e4cb33440b493b6b672': '584ad285dcb9e7d42cf3e93f1cc3fe11' }
		  },
		  'univ': { 
			url: 'https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL1-CTR-4s/Live/channel(universo-east)/master.mpd', 
			drm: { '232d71bb013d39ffb92ee8c576fb7e8e': '087408a48be8d57046c3868b37ea90ba' }
		  },
		  'daznde1': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/k2dcwnlpgr/out/v1/0502dc73a24b43a79c042bf2d14f6b84/cenc.mpd', 
			drm: { '0c900a7eae0097e0977141b68c9bffc4': 'fa534e6d48eccf905a449051a5e280c8' }
		  },
		  'daznde2': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/lhr-nitro/live/dash/enc/wdxmrxkd70/out/v1/3b94f689049a43d082648d093a77f5f8/cenc.mpd', 
			drm: { 'fe4e1cd2eea9e7ac5b365c261e41c57c': '38dd1a0751aa0f04f2035636cf0608eb' }
		  },
		  'fubo': { 
			url: 'https://otte.live.fly.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/3b7qwiqzk3/out/v1/9f14895badca43e6a716db021dcd0c31/cenc.mpd', 
			drm: { 'dc69b6159a0f9f0a4e03b3ff91cbacd5': 'd0dcbcd7723bc40df0bf34c9c092d51f' }
		  },		  
		  'rtlde': { 
			url: 'https://pnowlive-a.akamaized.net/live/rtlhd/dash/rtlhd.mpd', 
			drm: { '57e48b99f3f6d4f13f5c5afdcca084ca': '29379a5e2d3405fad2f5d9cbe92586c3' }
		  },
		  'nbc': { 
			url: 'https://fsly.stream.peacocktv.com/Content/CMAF_OL1-CTR-4s/Live/channel(knbc)/master.mpd', 
			drm: { '0045a118e231f1326bcdb45350b1ceaa': '8c13afbfa54ea37a368b8b859021f6e3' }
		  },
		  'sn360': { 
			url: 'https://live-d-02-rogers-uw-prd.akamaized.net/out/v1/r-prd/ch-06-prd-r-v2/dash-ch-06-prd-r-hd/index.mpd', 
			drm: { '27c0df9fa2e9314b8c49f824e1ff9d82': 'ff57bd34fde4c6022385879fe394dd6d' }
		  },	
		  'snpacific': { 
			url: 'https://live-d-02-rogers-uw-prd.akamaized.net/out/v1/r-prd/ch-04-prd-r-v2/dash-ch-04-prd-r-hd/index.mpd', 
			drm: { '7a565810c9cb35aca05476af10bffe05': 'b6759d6505a377dcec768a3ecb1cbad0' }
		  },	
		  'snone': { 
			url: 'https://live-d-02-rogers-uw-prd.akamaized.net/out/v1/r-prd/ch-05-prd-r-v2/dash-ch-05-prd-r-hd/index.mpd', 
			drm: { 'dbad1672b1bf3d0abd1c1c2161057f99': 'e1100c4e24f028d47a36ead37f0fd55f' }
		  },	
		  'sneast': { 
			url: 'https://live-d-02-rogers-uw-prd.akamaized.net/out/v1/r-prd/ch-01-prd-r-v2/dash-ch-01-prd-r-hd/index.mpd', 
			drm: { 'f0407787b4d83e5db9dbcd760aec17ce': '0f7c2736f496c2d2eccc9ebbe27799b9' }
		  },  
		  'mncsports': { 
			url: 'https://av-ch-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd', 
			drm: { '45fec91ce1f19b6b1f31d69dcfaaf6cd': '843e228ab109e9aa6c4822ee4ad05d7d' }
		  },
		  'sgaff': { 
			url: 'https://tglmp02.akamaized.net/out/v1/8c503a6966554d439035588f10505eee/manifest.mpd', 
			drm: { '1b8ee3db17d34547983a2c3ddc3d28fc': 'fb5deb5f688fd67ec20c71191c7f4590' }
		  },
		  'sgaff2': { 
			url: 'https://tglmp02.akamaized.net/out/v1/6e5a888d4bf847a2be521c55f7bfd08c/manifest.mpd?id=15', 
			drm: { 'cdf0001f693942da990fe81afa3eb0cd': '6b8d4bc58615439954851eeda771f417' }
		  },	
		  'espnmx1': { 
			url: 'https://aka-live1-ott.izzigo.tv/1/out/u/dash/ESPN-HD/default.mpd', 
			drm: { 'bb43112b7b72e9c287da0ecdec8606a7': '29e3d2678107f0ab0b35b6537c734f2a' }
		  },
		  'espnmx2': { 
			url: 'https://aka-live1-ott.izzigo.tv/1/out/u/dash/ESPN-2-HD/default.mpd', 
			drm: { '90e2e491c850a49a5ab21bb6fa6b4d24': '4d7e33da19b971cef49e35eccdb9de0b' }
		  },
		  'espnmx3': { 
			url: 'https://aka-live1-ott.izzigo.tv/1/out/u/dash/ESPN-3-HD/default.mpd', 
			drm: { '0355f64277082b903022985035c498ca': '7a8ed20a4958398677e2c9ccd5a53a00' }
		  },
		  'espnmx4': { 
			url: 'https://aka-live1-ott.izzigo.tv/1/out/u/dash/ESPN-PLUS-HD/default.mpd', 
			drm: { '666607af08b9eeddaae1d6c36a34d689': '10fdc24a14e8423f5e5ff03569439b14' }
		  },
		  'espncol1': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(8757cb0a-3584-40cd-901e-8937c7deba83)/master.mpd', 
			drm: { 'cb004fb100bd92f23793562891e3236b': 'b3e4e74ae2080b137e68bbd0ef8a7e05' }
		  },
		  'espncol2': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(62567d5c-295c-4ffd-ac7e-c9749e874884)/master.mpd', 
			drm: { 'a81ee4a694fecd6aa8a682e5024b313c': '6d15568e1dab59e7202ae12e71505185' }
		  },
		  'espncol3': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(a38d1401-ee01-4802-812a-7cb460c9832c)/master.mpd', 
			drm: { '8a60d7889ff126ee1895335e92254f8e': 'de1b0ce19fa804a1c473eb8ef2d5cf6d' }
		  },
		  'espncol4': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(9500bf02-0001-4199-a150-58dc5d692cca)/master.mpd', 
			drm: { '54a2c11085c315ed6ff85c340a86095d': '5f0d10cf4a5c7e22e286b7e8cb4e79f4' }
		  },
		  'espncol5': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(80c74968-a2ef-4005-8661-045fe97408a8)/master.mpd', 
			drm: { '4e126297fc7af35c736bdffe98eecaaa': 'fdb0091cf67d9c596dbfb07cf6f4c8f5' }
		  },
		  'espncol6': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(b30aa51e-97fa-4354-bb38-871fb360e984)/master.mpd', 
			drm: { 'f5836382452cdca1e1c8bf8b9a713534': '7d261930c3309ed2b06d2abb34a64410' }
		  },
		  'espncol7': { 
			url: 'https://vcdn.mn10.entel.bo/Content/DASH/Live/Channel(5ab5db84-2235-4c10-9066-be9bc2ee087a)/master.mpd', 
			drm: { '98ea1e32227adcd3618baac2bbf36814': '72a03a09d33e412f14a9bfa4ef24b542' }
		  },
		  'skybunmx': { 
			url: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/SKY-SPORTS-24-HD/default.mpd', 
			drm: { 'd8d5823d92a9ef9306a4cc4bd634b4b4': 'df9fbdaa0ef9e905b75f4692f213af19' }
		  },
		  'skylamx': { 
			url: 'https://aka-live1-ott.izzigo.tv/2/out/u/dash/SKY-SPORTS-16-HD/default.mpd', 
			drm: { 'c88dc6c668cac3b468d4a4c7e176ff3d': '1aeb739de2c14ed0ad658ca8043208d8' }
		  },
		  'tntmx': { 
			url: 'https://aka-live1-ott.izzigo.tv/2/out/u/dash/TNT-HD/default.mpd', 
			drm: { 'dca8597f12f8d6928b55c1291c7bb300': '36c8b3f51d474b95f0adad70899343e1' }
		  },		  
		  'ziggo1': { 
			url: 'https://mag03.tvx.prd.tv.odido.nl/wh7f454c46tw75168188_-627298088/PLTV/86/224/3221241590/3221241590.mpd?zoneoffset=0&devkbps=1-7000&servicetype=1&icpid=86&accounttype=1&limitflux=-1&limitdur=-1&tenantId=3103&accountinfo=%7E%7EV2.0%7EqbcsJh_jU5C9BcZc959e_wae44b4867b3417aa76b5db2da20fe46c%7EKZzTWjB8qD1zdgbJjRPVLJX-tV0qiN9RBHC_iseGrsmTSRjj06oGDtGlpSCRGOwF3626cf085c08d024c7e4aafc18c32440%7EExtInfo5Ro3VppWiUusj2ippqUPkQ%3D%3D4a2d2c8ce133f43026d0e31b822b8474%3A20240601012829%3AUTC%2C10001003329222%2C87.212.140.171%2C20240601012829%2C3103_SP1S%2C10001003329222%2C-1%2C0%2C1%2C%2C%2C2%2C3103_Sport1%2C%2C%2C2%2C10000044444303%2C0%2C10000025050255%2CNDEzODg2NTY3MzEwMzI2NzMwNjMwNTY%3D%2C%2C%2C5%2C1%2CEND&GuardEncType=2&RTS=1717205309&from=11&hms_devid=1008&online=1717205309&mag_hms=1008,311,305&_=1717205322621', 
			drm: { 'ef34ae91b4f2415e8439b2ad105e7488': '243248d8de1ff8c7c587ee2057317523' }
		  },
		  'ziggo2': { 
			url: 'https://mag03.tvx.prd.tv.odido.nl/wh7f454c46tw266117884_-1972819316/PLTV/86/224/3221241560/3221241560.mpd?accountinfo=~~V2.0~OhA1DF4svOZppKxb-t-Ngw144cce44121c63284a33d5453493e5c8~1_Fmlu5PevHMYnEi9Z_HX2goKAd0VHSuxZMoIcAXcawYvG1meqGp2eQ2Ibhjvh7e59e7f6df3d57f23a32024ad67f0f19dc:UTC,', 
			drm: { '3cfa8625f650406ebf6a4d1ea737f572': '0534e747c70b364aa7210e1bf3191df0' }
		  },
		  'ziggo3': { 
			url: 'https://mag02.tvx.prd.tv.odido.nl/wh7f454c46tw407556707_-381738111/PLTV/86/224/3221241511/3221241511.mpd?accountinfo=~~V2.0~yVi0dMX4icO5Ka9e92EQfg8812e1c1044f7d357066472e3ee99ef4~2dRB9E-vDtoAbYl169LbcJpxUgWVJtbeU_PlhGfNUflphvljOb5VaEhxruETYG9qcccaf5c5b655bf7504ed7ec5a1dd798f:UTC,', 
			drm: { '4dbea4b5713a4aa1ae3a2544cd522fc7': 'a8323ea99b2d6200a48e1bc27322d548' }
		  },
		  'ziggo4': { 
			url: 'https://da-d436234920010b8800010302000000000000000b.id.cdn.upcbroadband.com/wp/wp4-anp-g05060506-hzn-nl.t1.prd.dyncdn.dmdsdp.com/live/disk1/NL_000097_019370/go-dash-fhd-avc/NL_000097_019370.mpd?p=web', 
			drm: { '16bf72dc22743d929c4318e193408373': 'eae51a1e3904124963074cbf432c7c8e' }
		  },
		  'ziggo5': { 
			url: 'https://mag04.tvx.prd.tv.odido.nl/wh7f454c46tw865586829_-819821292/PLTV/86/224/3221241610/3221241610.mpd?accountinfo=~~V2.0~LNS2PBO5tyhp5z1Pe6ObBA6cd7a4ec35c4492167b9376e6dff2932~BZw2dESHw-I1PQCFh9gGxCMvrIIzgMdYAe900qj8l6aoXUX9ahyR6I9EUIu7nDR4f4887615c83ea7a8cee6dd33137c4ebe:UTC,', 
			drm: { '3fb40d85724942f994d86943f48021db': 'a6da8742502c8a2153067f5f2a70fb02' }
		  },
		  'ziggo6': { 
			url: 'https://mag03.tvx.prd.tv.odido.nl/wh7f454c46tw1024019879_757686866/PLTV/86/224/3221241521/3221241521.mpd?accountinfo=~~V2.0~URnD_afuosWHfY5OEqRXOwfa01c8ac56cf4511de39c2c4a3cab278~iVxKjbtf2gx_dYFqI-vt5C4Cu3COYDjZaw6C_kO2T2wm30fwo1ctD1gr_e2PrgTh48867c3177f3c34842031623cb2e06c9:UTC,', 
			drm: { '1a0ffa532aa2498490826e2f6a37f7c9': 'a8cec27bc7d47909c5b0d8f473b43e8d' }
		  },
		  'tf1': { 
			url: 'https://cachehsi1b.netplus.ch/live/eds/tf1hd/browser-dash/tf1hd.mpd', 
			drm: { '': '' }
		  },
		  'setantalt1': { 
			url: 'https://tr.live.cdn.cgates.lt/live/dash/561002/index.mpd', 
			drm: { '8ab2332442854e62b0018eec3ee58484': '37fdee8b6eef5c96001e8c6fc47bfc08' }
		  },
		  'ssc1': { 
			url: 'https://ssc-1-enc.edgenextcdn.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd', 
			drm: { 'd84c325f36814f39bbe59080272b10c3': '550727de4c96ef1ecff874905493580f' }
		  },
		  'ssc2': { 
			url: 'https://ssc-2-enc.edgenextcdn.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd', 
			drm: { '8bcfc55359e24bd7ad1c5560a96ddd3c': 'b5dcf721ab522af92a9d3bf0bd55b596' }
		  },
		  'ssc3': { 
			url: 'https://ssc-3-enc.edgenextcdn.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd', 
			drm: { '7de5dd08ad8041d586c2f16ccc9490a1': '5e1503f3398b34f5099933fedab847ef' }
		  },
		  'ssc4': { 
			url: 'https://ssc-4-enc.edgenextcdn.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd', 
			drm: { '5c672f6b85a94638872d0214f7806ed4': 'bf8756fbb866ee2d5c701c2289dd8de3' }
		  },
		  'ssc5': { 
			url: 'https://ssc-5-enc.edgenextcdn.net/out/v1/99289eac5a7b4319905da595afbd792b/index.mpd', 
			drm: { 'c88b512b17ab4f6cb09eb0ff4a1056ed': 'adc08ee1c20a734972a55c9aebbd1888' }
		  },
		  'sscex1': { 
			url: 'https://ssc-extra-1-enc.edgenextcdn.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd', 
			drm: { 'ecbc9e6fe6b145efb6658fb5cf7427f8': '03c17e28911f71221acbc0b11f900401' }
		  },
		  'sscex2': { 
			url: 'https://ssc-extra-2-enc.edgenextcdn.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd', 
			drm: { '4d89249bd4ca4ebc9e70443265f9507d': 'cf074ffd2646c9c2f8513b47fa57bc30' }
		  },
		  'sscex3': { 
			url: 'https://ssc-extra3-enc.edgenextcdn.net/out/v1/8f1c6c3f05ef4284a64b342891bd85ae/index.mpd', 
			drm: { '98cfd6fd4812497fb24dc75f7545f2ee': 'd3006ee69e77b25939728ebf30d3180a' }
		  }
		};
