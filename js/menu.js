let deps = {
            "amazonas":{"amaz1":["ama1.1","ama1.2","ama1.3"],
                         "amaz2":["ama2.1","ama2.2","ama2.3"],
                         "amaz3":["ama3.1","ama3.2","ama3.3"]
                        },
            "Apurimac":{"apu1":["apu1.1","apu1.2","apu1.3"],
                         "apu2":["apu2.1","apu2.2","apu2.3"],
                         "apu3":["apu3.1","apu3.2","apu3.3"]
                        }
        }
for (let dep in deps) {
	console.log(dep)
	for(let prov in deps[dep]){
		console.log(prov)
		for(let dist in deps[dep][prov]){
			console.log(deps[dep][prov][dist])
		}
	}
}

function llenarDepts(){
		let select=document.getElementById('depa')
		select.options=[]
		i=0;
	for (let dep in deps) {
		select.options[i]=new Option(dep,dep)
		i++
	}
}
function llenarProvs(){
	let selectProv=document.getElementById('prov')
	selectProv.options=[]
	let dept=document.getElementById('depa').value
	let provs=deps[dept]
	i=0;
	for (let prov in provs) {
		console.log(provs[prov])
		selectProv.options[i]=new Option(prov,prov)
		i++
	}
	llenarDists()
}
function llenarDists(){
		let selectDist=document.getElementById('dist')
		selectDist.options=[]
		let dept=document.getElementById('depa').value
		let prov=document.getElementById('prov').value
		let dists=deps[dept][prov]
		i=0;
	for (let dist in dists) {
		console.log(dists[dist])
		selectDist.options[i]=new Option(dists[dist],dists[dist])
		i++
	}
}

llenarDepts()
llenarProvs()
llenarDists()

