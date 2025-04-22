
function decode(encrypted) {
    const key = { '/': 'a', 'u': 'b', 'P': 'c', '6': 'd', 'U': 'e', 'j': 'f', 'W': 'g', '_': 'h', 'k': 'i', 'R': 'j', '.': 'k', 'v': 'l', 'A': 'm', '7': 'n', 'X': 'o', 'M': 'p', 'T': 'q', 'G': 'r', 'N': 's', 'V': 't', 'i': 'u', ':': 'v', 'E': 'w', 's': 'x', 'I': 'y', 't': 'z', 'F': 'A', '9': 'B', 'q': 'C', '8': 'D', 'Q': 'E', 'C': 'F', '3': 'G', 'f': 'H', 'p': 'I', '2': 'J', '1': 'K', 'l': 'L', 'L': 'M', 'd': 'N', 'm': 'O', 'b': 'P', 'o': 'Q', 'S': 'R', 'e': 'S', 'D': 'T', 'H': 'U', 'y': 'V', '=': 'W', 'J': 'X', 'g': 'Y', '0': 'Z', 'B': '0', '&': '1', 'Z': '2', 'x': '3', 'Y': '4', '?': '5', 'K': '6', '-': '7', 'c': '8', 'n': '9', 'z': '.', 'a': '_', 'r': '-', 'h': '/', 'O': ':', '4': '&', '5': '?', 'w': '=' };
    return encrypted.split('').map(char => key[char] || char).join('');
}

	// Channel data - add more channels if needed
	const channels = {
		'rcti': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhSqDpr88hN/a6/N_a:AshSqDpr88zAM6'), 
			drm: { [decode('nu/xU&?xUjcn?K6KUZuBKcYjPj-Yj?cj')]: decode('6uPZcPu?PKYZKBcBjncY/?uK6YxKuuxB') }
		},
		'mnc': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhLdqDyrf8hN/a6/N_a:AshLdqDyrf8zAM6'), 
			drm: { [decode('cZcUB/u/ncZ?Px?YK/Zcx&UYPBPxKj-j')]: decode('jc?6x6P6xcnc&xKc/ux6/?n-Un-Uu6PP') }
		},
		'gtv': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6Nh3Dyrf8hN/a6/N_a:Ash3Dyrf8zAM6'), 
			drm: { [decode('ccjKP-Pu6-nxx-YPu?j&Z6-UZK6P6Kxu')]: decode('UcZ6//-P-ujuBx6nnxZ-YKxj6u6x-xxK') }
		},
		'inews': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhkdUENDyrf88hN/a6/N_a:AshkdUENDyrf88zAM6'), 
			drm: { [decode('/x&Pj?&xK-cn?&Yu-U&ZunPPnnxB-PcY')]: decode('ncBU?Y6K-&jjPZuZjYPj?YU-?P/UB/PZ') }
		},
		'rtv': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhSDyhN/a6/N_a:AshSDyzAM6'), 
			drm: { [decode('xBxcYUU?YZYU/uY/j6jjxY6-/?nUBUjn')]: decode('?jx6ZjZP&nYZKK/Un/ZcZ&Bjcn-KPuUB') }
		},
		'sindonews': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhLdq7UENrf88hN/a6/N_a:AshLdq7UENrf88zAM6'), 
			drm: { [decode('ZKPPxUxxYxc?c6xncKxZZj&KU&Bu?cZx')]: decode('B/6-x?U-B-U&P-nuP??BUj/YnjZU/Yu6') }
		},		  
		'trans7': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhDG/7N-rZhN/a6/N_a:AshDG/7N-rZzAM6'), 
			drm: { [decode('ZKu6KBUBxuuU6-c&nUU/BuZ-B-?/&cn-')]: decode('6ZZ&u/K/K/uKKUxBcxPBB&6ZPY/xU?P?') }
		},
		'transtv': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhDG/7NDyrZhN/a6/N_a:AshDG/7NDyrZzAM6'), 
			drm: { [decode('xxYn?B-c&jKB/KKj?U?cxZYu-B/PK-?6')]: decode('-xP/P/n-uUcnnnPUnPjUuxu/u/6cKKn6') }
		},
		'tvone': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhDym7UrZhN/a6/N_a:AshDym7UrZzAM6'), 
			drm: { [decode('nBZBYPB??Y?jn?/ZKZuuB6x/PY?6Uc-B')]: decode('BUcBjZ/&nj6jc6/Y-KujKn?P6n?-BuuZ') }
		},
		'kompas': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6Nh1XAM/NDyhN/a6/N_a:Ash1XAM/NDyzAM6'), 
			drm: { [decode('Ynxj6&BUKBn66BZ/Un-nKYjYxcU-U?xB')]: decode('Kn?PjncnK&cZP?Zj&Px/Z?cZBU---cj?') }
		},
		'antv': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhFdDyhN/a6/N_a:AshFdDyzAM6'), 
			drm: { [decode('Yx&BU6ucunjjU-n/uuYBu/P/j/--cUPx')]: decode('/Uuu-UcK6c/xxK6n/nx6x66c/Y&&?xPj') }
		},
		'mdtv': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhdUVDyrf8hN/a6/N_a:AshdUVDyrf8zAM6'), 
			drm: { [decode('Ku-uuPj&6?&&/?KUKuxPU6/xnZUYj/xx')]: decode('6&-KKZYY6-P&PYYUj6YPK-//j/UxUU-u') }
		},
		'tvri': { 
			url: decode('_VVMNOhh/:rP_rP67zA7P7XEzk6hvk:UhU6NhbUAUGN/Vi9/7WN/hN/a6/N_a:AshbUAUGN/Vi9/7WN/zAM6'), 
			drm: { [decode('P/K?/jnB/6P?Ux66u&cBU&KYZKuuK-6/')]: decode('uKjc-/x/&Zc6u6-?U/6BxKj?nKU6U/U-') }
		},
		'beinau1': { 
			url: decode('_VVMNOhh/&ZZ/k:XVVvk7U/Gr/z/./A/k_6z7UVhmDD9hNI6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhME6:6njA?ihXiVh:&h?UZZcY?6/uxKYcuc/-Bxxj6?nZx6KZ6&hPU7PzAM6'), 
			drm: { [decode('jn?n6P66&P/cPcnK?cP6K?&U6xKUZc?&')]: decode('//YPj?KPU-P?ZZ/nUK?cZPYZ?x-uUxc&') }
		},
		'beinau2': { 
			url: decode('_VVMNOhh/xK/k:XVVvk7U/Gr/z/./A/k_6z7UVhmDD9hNI6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhKju7GxUkYuhXiVh:&h?-6Z/UnK/YPPYZxBcc&P6cB&uxcnU6jKhPU7PzAM6'), 
			drm: { [decode('n/j6-ZjZB?-xBB&PZxK-Z6Z&?ccnZ/?j')]: decode('nuPxZ6jYc/ZUj/PxBB-Zu-U?PKcxuP6&') }
		},
		'beinau3': { 
			url: decode('_VVMNOhh/cx/k:XVVvk7U/Gr/z/./A/k_6z7UVhmDD9hNI6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhWkWsN.BvI/hXiVh:&h6j-?6cc-uPUYYx-ucj6jxY?/UY??&&xuhPU7PzAM6'), 
			drm: { [decode('YuZBxx&KPY-Px-B/&UunBn-PB-B6-ZZK')]: decode('K-KUK-cxjZx-cnP6jYjjBYcKxcK&Y?U6') }
		},	
		'beinid1': { 
			url: decode('_VVMNOhhR/7PX.BxzUviVi7/zEXG.UGNz6U:hXiVh:&hxuBKKBUB?UU6Y6-Kn?Z&UuBZ-?//ux/uhk76UszAM6'), 
			drm: { [decode('x/UK/YxBP&ucYZBU/ZcBUx&-&Yx6c6x/')]: decode('&YZY-xUUnZ?6uB6uBBcxP-Y/&-cPcZnc') }
		},
		'beinid2': { 
			url: decode('_VVMNOhhR/7PX.BxzUviVi7/zEXG.UGNz6U:hXiVh:&hPjP/?Z-6Bj&KYBxxnK/-&uZ6x6?YPxZjhk76UszAM6'), 
			drm: { [decode('x6-?K6?KKP/nYUKYnn?&cjju&Y-Y6?6B')]: decode('6uUY/6KcBxU-Y-xnucjn?Y6ZxPP?cU-u') }
		},
		'beinid3': { 
			url: decode('_VVMNOhhR/7PX.BxzUviVi7/zEXG.UGNz6U:hXiVh:&h/ZK?Kn?6u?PuYK&Bn?PujUjPBZ/6-nxuhk76UszAM6'), 
			drm: { [decode('xYY6xZBP/Y?KY&/ccPjBBZ6ux?&U6n/Y')]: decode('ZYKPPKUU-/uZx?PucZYU6xunBYu-BYBu') }
		},	  
		'ar1': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/&zAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar2': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/ZzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar3': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/xzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar4': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/YzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar5': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/?zAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar6': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/KzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'arp1': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vN-h/NaMGUAkiA&zAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'arp2': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vN-h/NaMGUAkiAZzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'arp3': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/NaMGUAkiAxzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'ar1x2': { 
			url: decode('_VVMNOhhEUuV:NVGU/Azu_VUvUPXAzu/h_vNKh/GU7/a&sZzAM657wjGXuk7NsAUII'), 
			drm: { [decode('P&cuK//-xnuUYPBu--YKB?jPju?6KuKc')]: decode('UY&Px/Kj-?xZuZUx/cZc6n?cB&ZYPcn6') }
		},
		'arena1cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/&a7h6Uj/ivVhk76UszAM6'), 
			drm: { 
				'9002ec8c3dbc55c5bccdcd6871d80fd0': '7099325123bae7810db508727bb0bc7d',
				'c43c83acda60593d8e3607efd5010d7d': '526f4a760ef52ab85056fbc10ea27584',
				'712090aae2065c21951b170bc3002330': 'a97774e4175b80205c3cf104e9574208' 
			}
		},  
		'arena2cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/Zh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'c5e5ac1b3cc15fe790f1bc96535fe329': '3defe59c38079ccad25a436200ad3bd7',
				'b2f22f5d7ca35910a73fbabc524954de': 'd87d08fbe6505ad7099b8c258f396d15',
				'd256b403efcc5c3db701fc696885e102': 'd46e4215e279b224e9d2a772db9c74a1' 
			}
		},  
		'arena3cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/xh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'3bedf4a896695958907e0984165090f0': 'a58317ffddf318f1540f31f67d95b5fb',
				'25c3df3202005cc98c47700295be59ca': '073f5a39d84dd14a9debd1a72bb1f055',
				'ccebefcba0a3546ba34d3fc587651708': '18f2b2027ce26867c23dcd7f57faa245' 
			}
		},  
		'arena4cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/Yh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'77ce6938c781526e999b688992f27764': 'bf1178841770fdba74f8629f0f06d2c0',
				'68cd661dbc8352fda000c532840f6340': '0255fb620f4f707ea7ba090058718306',
				'89d1dc54692e5b4fb5995fc0953bf5bf': '31b8953ab60b90fefc93d9bd1b806fbc' 
			}
		},
		'arena5cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/?h6Uj/ivVhk76UszAM6'), 
			drm: { 
				'34a709bbeac052f293c778c0770829fd': '2b801fde1ad4839d4080d6ec6b0ec4ce',
				'e473ec5d96f45a9f9a22eb665b5b1ea9': 'ace54ce15b69d249b00395c9e6b85b90',
				'18d3fba08f3152c38f14151219fa9792': '78b0c5b961351e482be81287466ecb08' 
			}
		},
		'arena6cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/Kh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'b3b60e79989a5b2799fa3a2394b8749f': 'a25d21e333dad3d131f126b7b57730be',
				'bfd8ff04a3625fcea8335c9575401697': '769d61a2d6fd7030a5088df2e70c2654',
				'5a86e42c58cf5d008546861c0f0fb22a': '67b1172a05bcb38a91a304d7098ce7f5' 
			}
		},
		'arena7cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/-h6Uj/ivVhk76UszAM6'), 
			drm: { 
				'5998265ef8fc5748822fef96229831aa': '9110b6be31b4bbdce67374bae3395269',
				'5d4b5005dbd355559b3c7fe4dae1fb05': '10e65a5b74158216190e654cdf05b584',
				'5244c72f4f5d5e1a8778fc93906c9cb3': '4c14a6a924ef7fb32534dd590d99d499' 
			}
		},  
		'arena8cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/ch6Uj/ivVhk76UszAM6'), 
			drm: { 
				'c6fc5b27b74e5b8e82ca19da484eb174': '51f8fd5eef736dccaea9235b621731e7',
				'b9e9546bc9ba52d1a75fba9222efa7f5': '2cec65c6b79be6c2d4481c6e0ef79bfc',
				'ca202ac1353a5c6b9960bdbb82f88efc': '7ef86abd9a62042858370852836c50b4' 
			}
		}, 
		'arena9cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/nh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'91a56f5aab4c56cb88fbf787187acafe': '0000816079a5ec4f093e3274bda26f2a',
				'a2ff372a21b35653a88592abfec3f9a7': 'd5bc25088d1fda12849aad90716de750',
				'7ecfd12eb26258c381afadac16ac8fc9': 'b4f351533d633abf76cda47fe75d579b' 
			}
		}, 
		'arena10cr': { 
			url: decode('_VVMNOhhuMP67A/7MGX6z7UsVV:z_Vz_GhuM.rV:h/GU7/&Bh6Uj/ivVhk76UszAM6'), 
			drm: { 
				'ee6860a6bf7a5f6c89bcf1794d16e25f': 'b573f718f1551d2cf2a335ca778f5604',
				'03ed75ef7e4c56cb8f81cc17952fc554': '2be3b8e9f4756601e5b263beb14c5908',
				'ea5736047df25edbb48bd055d48eb3dd': '8b40d3a415517224245a79e907cb8ef0' 
			}
		},	  
		'spoph1': { 
			url: decode('_VVMNOhhTMrMv6Vrvk:UrWGMr&&rMGX6z/./A/ktU6z7UVhXiVhih6GaNMXV:_6zAM6'), 
			drm: { [decode('UP-UUZ-6cx-KYUYucY?PYcPP/x&PcUUj')]: decode('nPBUY&n&ZBxjPPuBj6UxYUUZnnnn&ZnU') }
		},
		'spoph2': { 
			url: decode('_VVMNOhhTMrMv6Vrvk:UrWGMr&xrMGX6z/./A/ktU6z7UVhXiVhih6GaNMXV:Z_6zAM6'), 
			drm: { [decode('-UU/-Z6KB-?ZY?/nnUUxZ??KBx6?cc?x')]: decode('KcYcUjKB?-??-nujY6Y&?6u&BxZ&?xU6') }
		},
		'tnt1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:UhPvkU7VNh6/N_hU7PhEjciN/W?&UhXiVh:&hu6xuBPx&YjjjYuu&/uYKnxx?cjxP6Z6xhPU7PzAM6'), 
			drm: { [decode('/UZKcY?u6xxBxc/nPB--Y/Bnc&BB-ZnY')]: decode('Kx/PKKZ66Ux&BPjuYPPKjnuYxuxY&nK6') }
		},
		'tnt2': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:UhPvkU7VNh6/N_hU7PhjBT:.GG/cRhXiVh:&hjcj/&-jBc-?KYj?&//Y6?P-BBuUYxUPYhPU7PzAM6'), 
			drm: { [decode('K6&-Bcu&c?PKPY6-ux-KBB?ZBP-PPnxP')]: decode('&//PUB?j?c6cU6UjnKn-j6?ZPuBnjYY&') }
		},
		'tnt3': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:UhPvkU7VNh6/N_hU7PhvN6/Nu:Wv:hXiVh:&huu?Yc/xKZKP6Y-Bc/juunY/?c6-&6PUnhPU7PzAM6'), 
			drm: { [decode('YUnnx//cP&jZn?jcunYUcUnUKjK6BujU')]: decode('cK/&U6KUnKP//ucUu&BBnjU?xB6ZPjYj') }
		},
		'tnt4': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:UhPvkU7VNh6/N_hU7PhkZMPRGYMU?hXiVh:&hn&ZUn6u?K6-?YBxuc/n/PB/-&n&&BjxKhPU7PzAM6'), 
			drm: { [decode('Ux&/?/c&P/jj?6B-U/ZY&&/?-&jPZU?n')]: decode('nKP?UjKnY-n-xZ/U-xYjnKZ-YcP&n-Zn') }
		},
		'tnt5': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:UhPvkU7VNh6/N_hU7PhWUN6EG67P7hXiVh:&h-nU-?Zj&UPP6YU&cuK/cnBY/BuPB&jZ6hPU7PzAM6'), 
			drm: { [decode('KBPB6nuY&Y-?UB&6uYjjun&U6??-juPP')]: decode('xKUUYBU?cnYcP/&?UxP/u/c6Y-ucjxYu') }
		},
		'tntmx': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:hZhXiVhih6/N_hDdDrf8h6Uj/ivVzAM6'), 
			drm: { [decode('BjUj6?6nY/cPu?uYBPB?-/u&cZj-6PZ-')]: decode('??YcPYcZxjj-j&U/K&u/ju-PuP&nUBB?') }
		},
		'foxmx1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhk/6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhXuXsU?xEIXhXiVh:&hj-cnZ/n6-BK6Y&n/cYK6-xcj/ZZU/xxUhPU7PzAM6'), 
			drm: { [decode('Zju6//xuU/B6BxZx/UB&&ux&c6&6u-&K')]: decode('c-ZKUj-U/j?un6PU&?juK//njcBu6?xj') }
		},
		'foxmx1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhk/6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhXuXsU?xEIXhXiVh:&hj-cnZ/n6-BK6Y&n/cYK6-xcj/ZZU/xxUhPU7PzAM6'), 
			drm: { [decode('Zju6//xuU/B6BxZx/UB&&ux&c6&6u-&K')]: decode('c-ZKUj-U/j?un6PU&?juK//njcBu6?xj') }
		},
		'foxmx2': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhk/6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhVUMRTUR&INhXiVh:&hPnPn&?nu/UU-Yn/&nK&Zu&?ncYn?c?n/hPU7PzAM6'), 
			drm: { [decode('ccxKjuBY6KZ6PKYPnjc/xnUjcKYB6?Uu')]: decode('6YjB?PU?KP?Zx&u-P6j?xY??uU/?cKZ&') }
		},
		'foxmx3': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhk/6r7kVGXhvk:UhPvkU7VNh6/N_hU7PhEIuWtBXGGchXiVh:&hZjK6&K&Z/u6YYj?ccxn&-jc/?c?un??jhPU7PzAM6'), 
			drm: { [decode('&&PcP&PZUjBxc?Pj&UKY6YYuunPx/xn?')]: decode('?-Kn-xBjju6PYuZj6cnY?nZn6n/PUBKx') }
		},
		'foxmxprem': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_hCmJrebmSDerbSQLpHLrf8h6Uj/ivVzAM6'), 
			drm: { [decode('BjUj6?6nY/cPu?uYBPB?-/u&cZj-6PZ-')]: decode('??YcPYcZxjj-j&U/K&u/ju-PuP&nUBB?') }
		},
		'ad1': { 
			url: decode('_VVMNOhhiNUvUPVXGzP67zk7VkWG/vrXVVz7UVhF8eb&hF8eb&zkNAvhA/7kjUNVzAM6'), 
			drm: { [decode('Uu?/x/YcjxU&n&/BBUx/P&UZ6Y-BPYn&')]: decode('ZPcu-&nc?Kx?Z-U?ZY6KKKZcPBnZUj&j') }
		},
		'ad2': { 
			url: decode('_VVMNOhhiNUvUPVXGzP67zk7VkWG/vrXVVz7UVhF8ebZhF8ebZzkNAvhA/7kjUNVzAM6'), 
			drm: { [decode('UjP/nxZ-Zun6xYj?Pjn6c?ncjYxuU?U/')]: decode('??U?jUYcnUnP&cjKPn-nPx&ZK6YuPjU6') }
		},
		'usaceast': { 
			url: decode('_VVMNOhhjNvIzNVGU/AzMU/PXP.V:zPXAhqX7VU7VhqLFCaml&rqDSrYNhlk:UhP_/77Uv(iN/rU/NV)hA/NVUGzAM6'), 
			drm: { [decode('n&ujZ6c&unU&x-B&/PKK-n&?KY&&Z&uc')]: decode('6BPPZBcZ&xZuYxB/6?/cuPYjx&Pnu--Z') }
		},
		'usacwest': { 
			url: decode('_VVMNOhhjNvIzNVGU/AzMU/PXP.V:zPXAhqX7VU7VhqLFCaml&rqDSrYNhlk:UhP_/77Uv(iN/rEUNV)hA/NVUGzAM6'), 
			drm: { [decode('xxxnKZUxU&xcx?ZncK-/n/BUZc/?U?6&')]: decode('?6xjPuU6?x-YnUUKZZU6BUKYjx&P&Puj') }
		},
		'peacock1': { 
			url: decode('_VVMNOhhjNvIzNVGU/AzMU/PXP.V:zPXAhqX7VU7VhqLFCaqDSrYNhlk:UhP_/77Uv(:P&BZ&7B-R)hA/NVUGzAM6'), 
			drm: { [decode('BBZBYKPn/Ynun/u&P6uKK&KuUP?6ZKPx')]: decode('6ZjnZjKu-U6Pn/&/B?6xnxu/BPZBUjnU') }
		},
		'peacock2': { 
			url: decode('_VVMNOhh/./AzNVGU/AzMU/PXP.V:zPXAhqX7VU7VhqLFCaqDSrYNhlk:UhP_/77Uv(:P&BZ&7B-R)hA/NVUGzAM6'), 
			drm: { [decode('BBZBYKPn/Ynun/u&P6uKK&KuUP?6ZKPx')]: decode('6ZjnZjKu-U6Pn/&/B?6xnxu/BPZBUjnU') }
		},
		'peacockev1': { 
			url: decode('_VVMNOhhWBBxrNvUriNrPA/jrMG6rPjzP67zMU/PXP.V:zPXAhPXB&hqX7VU7VhqLFCaeZrqDSrYNr:Zhlk:UhP_/77Uv(?B&Y-Zcr-&K&ZKrYcjn?&j/j?U)hA/NVUGzAM6'), 
			drm: { [decode('BBZZB6YUuKK&/6nux66YPYxxYxnjP-U6')]: decode('6Y&&ZKUn/K?xB/?cZZ-UxcUnKK?P&6PU') }
		},
		'dazn1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhuA7UvX?P-/hXiVh:&hxPUZP6PY?cnjYK&cnxZZu6x-&-P--n?-hPU7PzAM6'), 
			drm: { [decode('YY66nP6x-BuBc/cKcU/6&&?jUcYUPj6U')]: decode('ujj&n/uB/?&Pj&YUcYcxcnu&?Zn&xj6B') }
		},
		'dazn2': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7Phs7.YAnu7sVhXiVh:&hYPU6-u-xZn/?YK?ZunuuB?Z&U6xcu6Y6hPU7PzAM6'), 
			drm: { [decode('BU/u?/xjxUxuYu/?6YZ6YBP/xB6&-?-&')]: decode('jxjBK&6U6nu-BUc&KB?nB6?cBZUP6/K6') }
		},
		'dazn3': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhtI&UU?NN_MhXiVh:&hu6Pjj/Knj/xuYjxuux?KnPnP-xUU&PB&hPU7PzAM6'), 
			drm: { [decode('u/6cUjjjKccPB6uux-&&UY/-&&YPZZ/x')]: decode('Ku/cBBK-xuZB--KPBPc?B&xB6Y?U&nZB') }
		},
		'dazn4': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhiM-TMEP_nuhXiVh:&h/K6?6&/&Zc-uYcnxuc?nPZ6KPPjZPK?6hPU7PzAM6'), 
			drm: { [decode('6Z-&BY6YZ-UYjc-U-?u&nxn?/njc-nKu')]: decode('-Zx?nxP-BUZ6YPYcKZ-?YxncUcB&Kcjc') }
		},
		'daznla1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhERW.vuV:__hXiVh:&hK?n-xK/&UZYPYBUYcK?/cBjj6-?U-6U-hPU7PzAM6'), 
			drm: { [decode('Yx6&PxuZ?ZB-jjxcuZZPPjU&-6xBZxK-')]: decode('-u&jc?jKUc&B?nY-xu&&YP&K/Z?PcZn/') }
		},
		'daznla2': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhEXiR:.j7A7hXiVh:&h&Y&u?ZjBc/&UYUn-c?BZ&n-ZnUUYc6PchPU7PzAM6'), 
			drm: { [decode('Bu&j6U/UUxjjP?&Un/KKPj&nxc6?-//j')]: decode('ZcUxPucc/u-uY-Kuc&/uc//BKZYPY6-&') }
		},
		'daznf1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVh6iur7kVGXhvk:UhPvkU7VNh6/N_hU7PhPTuP:W.ucxhXiVh:&hY6uUB?UPju&?YBYYc6cZ6KcUUUujuu&PhPU7PzAM6'), 
			drm: { [decode('&BK&uU&Z6xBxZY-YZKUPZ?UcxKnuZKY-')]: decode('u6KZZuBUK&BZn?6UxuBuPPuc?BPP////') }
		},
		'tel': { 
			url: decode('_VVMNOhhvk:UrX7U/MMrMG6r7UENz/./A/ktU6z7UVhqX7VU7VhqLFCaml&rqDSrYNhlk:UhP_/77Uv(=ede)hA/NVUGzAM6'), 
			drm: { [decode('-6KuunjcKU&xxUYPuxxYYBuYnxuKuK-Z')]: decode('?cY/6Zc?6PunU-6YZPjxUnxj&PPxjU&&') }
		},
		'univ': { 
			url: decode('_VVMNOhhvk:UrX7U/MMrMG6r7UENz/./A/ktU6z7UVhqX7VU7VhqLFCaml&rqDSrYNhlk:UhP_/77Uv(i7k:UGNXrU/NV)hA/NVUGzAM6'), 
			drm: { [decode('/YZKKnU/jU6-xYnYnn//u-6j?ccuxPPj')]: decode('Bjujj&YxUu6Bn-BKB/x--UY/6UBxxZcc') }
		},
		'daznde1': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:Uh6/N_hU7Ph.Z6PE7vMWGhXiVh:&hB?BZ6P-x/ZYuYx/-nPBYZujZ6&YjKucYhPU7PzAM6'), 
			drm: { [decode('BPnBB/-U/UBBn-UBn--&Y&uKcPnujjPY')]: decode('j/?xYUK6YcUPPjnB?/YYnB?&/?UZcBPc') }
		},
		'daznde2': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhv_Gr7kVGXhvk:Uh6/N_hU7PhE6sAGs.6-BhXiVh:&hxunYjKcnBYn/Yx6BcZKYc6Bnx/--j?jchPU7PzAM6'), 
			drm: { [decode('jUYU&P6ZUU/nU-/P?uxK?PZK&UY&P?-P')]: decode('xc66&/B-?&//BjBYjZBx?KxKPjBKBcUu') }
		},
		'fubo': { 
			url: decode('_VVMNOhhXVVUzvk:UzjvIzEEz/k:rP67z7UVhM6sr7kVGXhvk:UhPvkU7VNh6/N_hU7Phxu-TEkTt.xhXiVh:&hnj&Ycn?u/6P/YxUK/-&K6uBZ&6P6BPx&hPU7PzAM6'), 
			drm: { [decode('6PKnuK&?n/BjnjB/YUBxuxjjn&Pu/P6?')]: decode('6B6PuP6--ZxuPYB6jBujxYPnPBnZ6?&j') }
		},		  
		'rtlde': { 
			url: decode('_VVMNOhhM7XEvk:Ur/z/./A/ktU6z7UVhvk:UhGVv_6h6/N_hGVv_6zAM6'), 
			drm: { [decode('?-UYcunnjxjK6Yj&xj?P?/j6PP/BcYP/')]: decode('Znx-n/?UZ6xYB?j/6Zj?6nPuUnZ?cKPx') }
		},
		'nbc': { 
			url: decode('_VVMNOhhjNvIzNVGU/AzMU/PXP.V:zPXAhqX7VU7VhqLFCaml&rqDSrYNhlk:UhP_/77Uv(.7uP)hA/NVUGzAM6'), 
			drm: { [decode('BBY?/&&cUZx&j&xZKuP6uY?x?Bu&PU//')]: decode('cP&x/juj/?YU/x-/xKcucuc?nBZ&jKUx') }
		},
		'natgeographic': { 
			url: decode('_VVMNOhhiNUvUPVXGzP67zk7VkWG/vrXVVz7UVhd3mhd3mzkNAvhA/7kjUNVzAM6'), 
			drm: { [decode('&u/nYunxuxn/ucBnu?c-Zx-6-uKB/BYn')]: decode('UBjnY6ujujnUKUY?Pn?K-/-u?BUuK&ZP') }
		},
		'natgeowild': { 
			url: decode('_VVMNOhhiNUvUPVXGzP67zk7VkWG/vrXVVz7UVhdf8hdf8zkNAvhA/7kjUNVzAM6'), 
			drm: { [decode('Z-KU?KuP&YBn?jxZ-uujBPnxKUu-uxcP')]: decode('Kx&Z-U/66u&cP?nK6uB?K?-YZYcYn?&n') }
		},
		'animalplanet': { 
			url: decode('_VVMNOhhiNUvUPVXGzP67zk7VkWG/vrXVVz7UVhFblhFblzkNAvhA/7kjUNVzAM6'), 
			drm: { [decode('cB-6KuYYuB/uKYnKc--uUc?&xx&xUxPU')]: decode('/?-6KY6?UBcZcYU?Z???j?-ucUKcuZ&P') }
		},		  
		'sgaff': { 
			url: decode('_VVMNOhhVWvAMBZz/./A/ktU6z7UVhXiVh:&hcP?Bx/KnKK??Y6YxnBx??ccj&B?B?UUUhA/7kjUNVzAM6'), 
			drm: { [decode('&ucUUx6u&-6xY?Y-ncx/ZPx66Px6ZcjP')]: decode('ju?6Uu?jKccj6K-UPZBP-&&n&P-jY?nB') }
		},
		'sgaff2': { 
			url: decode('_VVMNOhhVWvAMBZz/./A/ktU6z7UVhXiVh:&hKU?/ccc6YujcY-/ZuU?Z&P??j-uj6BcPhA/7kjUNVzAM65k6w&?'), 
			drm: { [decode('P6jBBB&jKnxnYZ6/nnBjUc&/j/xUuBP6')]: decode('Kuc6YuP?cK&?Yxnn?Yc?&UU6/--&jY&-') }
		},	
		'espnmx1': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_hQebdrf8h6Uj/ivVzAM6'), 
			drm: { [decode('uuYx&&Zu-u-ZUnPZc-6/BUP6UPcKBK/-')]: decode('ZnUx6ZK-c&B-jB/uBux?uK?x-P-xYjZ/') }
		},
		'espnmx2': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_hQebdrZrf8h6Uj/ivVzAM6'), 
			drm: { [decode('nBUZUYn&Pc?B/Yn/?/uZ&uuKj/KuY6ZY')]: decode('Y6-Uxx6/&nun-&PUjYnUx?UPP6un6UBu') }
		},
		'espnmx3': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_hQebdrxrf8h6Uj/ivVzAM6'), 
			drm: { [decode('Bx??jKYZ--BcZunBxBZZnc?Bx?PYncP/')]: decode('-/cU6ZB/Yn?cxncK--UZPnPP6?/?x/BB') }
		},
		'espnmx4': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_hQebdrblHerf8h6Uj/ivVzAM6'), 
			drm: { [decode('KKKKB-/jBcunUU66//U&6KPxK/xY6Kcn')]: decode('&Bj6PZY/&YUcYZxj?U?jjBx?KnYxnu&Y') }
		},
		'skybunmx': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h?hXiVhih6/N_he1grebmSDerZYrf8h6Uj/ivVzAM6'), 
			drm: { [decode('6c6?cZx6nZ/nUjnxBK/YPPYu6KxYuYuY')]: decode('6jnju6//BUjnUnB?u-?jYKnZjZ&x/j&n') }
		},
		'skylive1': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:h&hXiVhih6/N_he1grlpyQrQyQdDr&rf8hA/7kjUNVzAM6'), 
			drm: { [decode('/xKxK/?&ZZ-j/xxcP666j?cnZ6c/KZ&P')]: decode('&YYYUUxPY6BcujxnY?Yun&Yj-n-nKcUu') }
		},
		'skylamx': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:hZhXiVhih6/N_he1grebmSDer&Krf8h6Uj/ivVzAM6'), 
			drm: { [decode('Pcc6PKPKKcP/PxuYKc6Y/YP-U&-Kjjx6')]: decode('&/Uu-xn6UZP&YU6B/6K?cP/cBYxZBc6c') }
		},
		'tntmx': { 
			url: decode('_VVMNOhh/./rvk:U&rXVVzkttkWXzV:hZhXiVhih6/N_hDdDrf8h6Uj/ivVzAM6'), 
			drm: { [decode('6P/c?n-j&Zjc6KnZcu??P&Zn&P-uuxBB')]: decode('xKPcuxj?&6Y-Yun?jB/6/6-BcnnxYxU&') }
		},		  
		'ziggo1': { 
			url: decode('_VVMNOhhA/WBxzV:szMG6zV:zX6k6Xz7vhE_-jY?YPYKVE-?&Kc&ccarKZ-ZncBcchblDyhcKhZZYhxZZ&ZY&?nBhxZZ&ZY&?nBzAM65tX7UXjjNUVwB46U:.uMNw&r-BBB4NUG:kPUVIMUw&4kPMk6wcK4/PPXi7VVIMUw&4vkAkVjviswr&4vkAkV6iGwr&4VU7/7Vp6wx&Bx4/PPXi7Vk7jXw%-Q%-QyZzB%-QTuPN2_aRH?qn9P0Pn?nUaE/UYYuYcK-uxY&-//-Ku?6uZ6/ZBjUYKP%-Q10tD=R9cT8&t6Wu2RSbyl2JrVyBTkdnS9fqakNU3GNADeSRRBKX38V3vMeqS3mECxKZKPjBc?PBc6BZYP-UY//jP&cPxZYYB%-QQsVp7jX?SXxyMM=kHiNRZkMMTHb.o%x8%x8Y/Z6ZPcPU&xxjYxBZK6BUx&ucZZucY-Y%xFZBZYBKB&B&ZcZn%xFHDq%Zq&BBB&BBxxZnZZZ%Zqc-zZ&Zz&YBz&-&%ZqZBZYBKB&B&ZcZn%Zqx&Bxaeb&e%Zq&BBB&BBxxZnZZZ%Zqr&%ZqB%Zq&%Zq%Zq%ZqZ%Zqx&BxaeMXGV&%Zq%Zq%ZqZ%Zq&BBBBBYYYYYxBx%ZqB%Zq&BBBBBZ?B?BZ??%Zqd8Qtm8WZdDgxLtQELtpZdtLEdRLEdDg%x8%Zq%Zq%Zq?%Zq&%ZqQd843i/G6Q7PDIMUwZ4SDew&-&-ZB?xBn4jGXAw&&4_ANa6U:k6w&BBc4X7vk7Uw&-&-ZB?xBn4A/Wa_ANw&BBc,x&&,xB?4aw&-&-ZB?xZZKZ&'), 
			drm: { [decode('UjxY/Un&uYjZY&?UcYxnuZ/6&B?U-Ycc')]: decode('ZYxZYc6c6U&jjcP-P?c-UUZB?-x&-?Zx') }
		},
		'ziggo2': { 
			url: decode('_VVMNOhhA/WBxzV:szMG6zV:zX6k6Xz7vhE_-jY?YPYKVEZKK&&-ccYar&n-Zc&nx&KhblDyhcKhZZYhxZZ&ZY&?KBhxZZ&ZY&?KBzAM65/PPXi7Vk7jXw~~yZzB~m_F&8CYN:m0MM1surVrdWE&YYPPUYY&Z&PKxZcY/xx6?Y?xYnxU?Pc~&aCAvi?bU:fLg7Qkn0afJZWX1F6Byfeis0LXpPFJP/Eg:3&AUT3MZUoZpu_R:_-U?nU-jK6jx6?-jZx/xZBZY/6K-jBj&n6POHDq,'), 
			drm: { [decode('xPj/cKZ?jK?BYBKUujK/Y6&U/-x-j?-Z')]: decode('B?xYU-Y-P-BuxKY//-Z&BU&ujx&n&6jB') }
		},
		'ziggo3': { 
			url: decode('_VVMNOhhA/WBZzV:szMG6zV:zX6k6Xz7vhE_-jY?YPYKVEYB-??K-B-arxc&-xc&&&hblDyhcKhZZYhxZZ&ZY&?&&hxZZ&ZY&?&&zAM65/PPXi7Vk7jXw~~yZzB~IykB6LJYkPm?1/nUnZQojWcc&ZU&P&BYYj-6x?-BKKY-ZUxUUnnUjY~Z6S9nQr:8VXFugv&KnluP2MsHW=y2VuUHabv_3jdHjvM_:vRmu?y/Q_sGiQDg3nTPPP/j?P?uK??uj-?BYU6-UP?/&66-ncjOHDq,'), 
			drm: { [decode('Y6uU/Yu?-&x/Y//&/Ux/Z?YYP6?ZZjP-')]: decode('/cxZxU/nnuZ6KZBB/YcU&uPZ-xZZ6?Yc') }
		},
		'ziggo4': { 
			url: decode('_VVMNOhh6/r6YxKZxYnZBB&BuccBBB&BxBZBBBBBBBBBBBBBBBuzk6zP67ziMPuGX/6u/76zPXAhEMhEMYr/7MrWB?BKB?BKr_t7r7vzV&zMG6z6I7P67z6A6N6MzPXAhvk:Uh6kN.&hdlaBBBBn-aB&nx-BhWXr6/N_rj_6r/:PhdlaBBBBn-aB&nx-BzAM65MwEUu'), 
			drm: { [decode('&Kuj-Z6PZZ-Yx6nZnPYx&cU&nxYBcx-x')]: decode('U/U?&/&UxnBY&ZYnKxB-YPujYxZP-PcU') }
		},
		'ziggo5': { 
			url: decode('_VVMNOhhA/WBYzV:szMG6zV:zX6k6Xz7vhE_-jY?YPYKVEcK??cKcZnarc&ncZ&ZnZhblDyhcKhZZYhxZZ&ZY&K&BhxZZ&ZY&K&BzAM65/PPXi7Vk7jXw~~yZzB~ldeZb9m?VI_M?t&bUKmu9FKP6-/YUPx?PYYnZ&K-unx-KUK6jjZnxZ~90EZ6QefErp&boqC_nW3sqL:GpptWL6gFUnBBTRcvK/XJHJn/_ISKpnQHpi-78SYjYcc-K&?PcxU/-/cPUUK66xx&x-PYUuUOHDq,'), 
			drm: { [decode('xjuYB6c?-ZYnYZjnnY6cKnYxjYcBZ&6u')]: decode('/K6/c-YZ?BZPc/Z&?xBK-j?jZ/-BjuBZ') }
		},
		'ziggo6': { 
			url: decode('_VVMNOhhA/WBxzV:szMG6zV:zX6k6Xz7vhE_-jY?YPYKVE&BZYB&nc-na-?-KcKcKKhblDyhcKhZZYhxZZ&ZY&?Z&hxZZ&ZY&?Z&zAM65/PPXi7Vk7jXw~~yZzB~HS78a/jiXN=fjg?mQTSJmEj/B&Pc/P?KPjY?&&6UxnPZPY/xP/uZ-c~kys1RuVjZWsa6gCTpr:V?qYqixqmg8R0/EKqa.mZDZEAxBjEX&PV8&WGaUZbGWD_YccK-Px&--jxPxYcYZBx&KZxPuZUBKPnOHDq,'), 
			drm: { [decode('&/Bjj/?xZ//ZYncYnBcZKUZjK/x-j-Pn')]: decode('/cPUPZ-uP-6Y-nBnP?uB6cjY-xuYxUc6') }
		},
		'tf1': { 
			url: decode('_VVMNOhhP/P_U_Nk&uz7UVMviNzP_hvk:UhU6NhVj&_6huGXENUGr6/N_hVj&_6zAM6'), 
			drm: { '': '' }
		},
		'setantalt1': { 
			url: decode('_VVMNOhhVGzvk:UzP67zPW/VUNzvVhvk:Uh6/N_h?K&BBZhk76UszAM6'), 
			drm: { [decode('c/uZxxZYYZc?YUKZuBB&cUUPxUU?cYcY')]: decode('x-j6UUcuKUUj?PnKBB&UcPKjPY-ujPBc') }
		},
		'ssc1': { 
			url: decode('_VVMNOhhNNPr&rU7PzU6WU7UsVP67z7UVhXiVh:&hPKnKUYc&nu??Y&Yxcc/&/Yc-Uc/Y?P/&hk76UszAM6'), 
			drm: { [decode('6cYPxZ?jxKc&YjxnuuU?nBcBZ-Zu&BPx')]: decode('??B-Z-6UYPnKUj&UPjjc-YnB?Ynx?cBj') }
		},
		'ssc2': { 
			url: decode('_VVMNOhhNNPrZrU7PzU6WU7UsVP67z7UVhXiVh:&h/&K6uZUPxxc/YY?/cZ6nP?Y&PPnZnxjnhk76UszAM6'), 
			drm: { [decode('cuPjP??x?nUZYu6-/6&P??KB/nK666xP')]: decode('u?6Pj-Z&/u?ZZ/jnZ/n6xujBu6??u?nK') }
		},
		'ssc3': { 
			url: decode('_VVMNOhhNNPrxrU7PzU6WU7UsVP67z7UVhXiVh:&hYZUcK&Z????ZYZ///Z/&ZB?KcxZU-c&Yhk76UszAM6'), 
			drm: { [decode('-6U?66Bc/6cBY&6?cKPZj&KPPPnYnB/&')]: decode('?U&?BxjxxncuxYj?BnnnxxjU6/ucY-Uj') }
		},
		'ssc4': { 
			url: decode('_VVMNOhhNNPrYrU7PzU6WU7UsVP67z7UVhXiVh:&h?ZK-U/?--Zc-YuB6uZY??n6KYxU//6nxhk76UszAM6'), 
			drm: { [decode('?PK-ZjKuc?/nYKxcc-Z6BZ&Yj-cBKU6Y')]: decode('ujc-?KjuucKKUUZ6?P-B&PZZcn66c6Ux') }
		},
		'ssc5': { 
			url: decode('_VVMNOhhNNPr?rU7PzU6WU7UsVP67z7UVhXiVh:&hnnZcnU/P?/-uYx&nnB?6/?n?/ju6-nZuhk76UszAM6'), 
			drm: { [decode('Pccu?&Zu&-/uYjKPuBnUuBjjY/&B?KU6')]: decode('/6PBcUU&PZB/-xYn-Z/??Pn/Uuu6&ccc') }
		},
		'sscex1': { 
			url: decode('_VVMNOhhNNPrUsVG/r&rU7PzU6WU7UsVP67z7UVhXiVh:&hKY-P?cKnxj&6YK/jnZu6-UKnj&-n&ZPuhk76UszAM6'), 
			drm: { [decode('UPuPnUKjUKu&Y?UjuKK?cju?Pj-YZ-jc')]: decode('BxP&-UZcn&&j-&ZZ&/PuPBu&&jnBBYB&') }
		},
		'sscex2': { 
			url: decode('_VVMNOhhNNPrUsVG/rZrU7PzU6WU7UsVP67z7UVhXiVh:&hcu-B6UZu-B6YY-u/c/-Y?Bu/nBnZK/Z6hk76UszAM6'), 
			drm: { [decode('Y6cnZYnu6YP/YUuPnU-BYYxZK?jn?B-6')]: decode('PjB-Yjj6ZKYKPnPZjc?&xuY-j/?-uPxB') }
		},
		'sscex3': { 
			url: decode('_VVMNOhhNNPrUsVG/xrU7PzU6WU7UsVP67z7UVhXiVh:&hcj&PKPxjB?UjYZcY/KYuxYZcn&u6c?/Uhk76UszAM6'), 
			drm: { [decode('ncPj6Kj6Yc&ZYn-juZY6P-?j-?Y?jZUU')]: decode('6xBBKUUKnU--uZ?nxn-ZcUujxB6x&cB/') }
		}
		};

		(function redirectIfNotAllowed() {
			const allowedDomains = ['https://kltraid.pages.dev/', 'https://bikinbaru96.blogspot.com'];
			const currentDomain = window.location.hostname;
		
			const isAllowed = allowedDomains.some(domain => currentDomain.endsWith(domain));
		
			if (!isAllowed) {
			window.location.href = 'https://kltraid.pages.dev/';
			}

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
		})();

		window.addEventListener('load', () => disableDevtool());
