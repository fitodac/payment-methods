import { u } from 'url-param'

import BitcoinLogo from './img/bitcoin.svg'
import EthereumLogo from './img/ethereum.svg'
import MercadopagoLogo from './img/mercadopago.svg'
import PaypalLogo from './img/paypal.svg'
import SantanderLogo from './img/santander.svg'
import TetherLogo from './img/tether.svg'
import UalaLogo from './img/uala.svg'
import Robot from './img/robot.png'
import './style.css'
;(async () => {
	let content = ``

	const { i } = u()

	// const resp = await fetch(`http://localhost/api/payment-methods/${i}`)
	const resp = await fetch(`https://app.fitodac.com/api/payment-methods/${i}`)
	const data = await resp.json()

	if (data.verified) {
		const classes = {
			box: 'bg-black/30 h-full px-6 py-8 space-y-6 rounded-xl',
			dataBlock: 'space-y-2',
			row: 'flex flex-col gap-x-8 md:flex-row md:justify-between',
			info: 'text-white break-all',
		}
		content = `
	<section class="container mx-auto">

	<div class="grid gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-3">
		${
			data.usdt_wallet && data.usdt_net
				? `<div class="">
						<div class="${classes.box}">
							<img src="${TetherLogo}" alt="Tether" class="w-20 md:w-24" />

							<div class="${classes.dataBlock}">
								<div class="${classes.row}">Wallet <span class="${classes.info}">${data.usdt_wallet}</span></div>
								<div class="${classes.row}">Red <span class="${classes.info}">${data.usdt_net}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}

		${
			data.btc_wallet && data.btc_net
				? `<div class="">
						<div class="${classes.box}">
							<img src="${BitcoinLogo}" alt="Bitcoin" class="w-7 md:w-8" />

							<div class="${classes.dataBlock}">
								<div class="${classes.row}"> Wallet <span class="${classes.info}">${data.btc_wallet}</span></div>
								<div class="${classes.row}">Red <span class="${classes.info}">${data.btc_net}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}
		
		${
			data.eth_wallet && data.eth_net
				? `<div class="">
						<div class="${classes.box}">
							<img src="${EthereumLogo}" alt="Ethereum" class="w-5 md:w-6" />

							<div class="${classes.dataBlock}">
								<div class="${classes.row}">Wallet <span class="${classes.info}">${data.eth_wallet}</span></div>
								<div class="${classes.row}">Red <span class="${classes.info}">${data.eth_net}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}
		
		${
			data.uala_alias && data.uala_cvu
				? `<div class="">
						<div class="${classes.box}">
							<img src="${UalaLogo}" alt="Uala" class="w-10 md:w-12" />

							<div class="${classes.dataBlock}">
								<div class="${classes.row}">Alias <span class="${classes.info}">${data.uala_alias}</span></div>
								<div class="${classes.row}">CVU <span class="${classes.info}">${data.uala_cvu}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}
		
		${
			data.mercadopago_alias && data.mercadopago_cvu
				? `<div class="">
						<div class="${classes.box}">
							<img src="${MercadopagoLogo}" alt="Mercado Pago" class="w-20 md:w-24" />

							<div class="${classes.dataBlock}">
								<div class="${classes.row}">Alias <span class="${classes.info}">${data.mercadopago_alias}</span></div>
								<div class="${classes.row}">CVU <span class="${classes.info}">${data.mercadopago_cvu}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}

		${
			data.paypal_email
				? `<div class="">
						<div class="${classes.box}">
							<div>
								<img src="${PaypalLogo}" alt="PayPal" class="w-20 md:w-24" />
							</div>

							<div class="${classes.dataBlock}">
								<div class="${classes.row}">Email <span class="${classes.info}">${data.paypal_email}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}

		${
			data.bco_santander_cuenta && data.bco_santander_sucursal
				? `<div class="">
						<div class="${classes.box}">
							<div>
								<img src="${SantanderLogo}" alt="Santander" class="w-20 md:w-28" />
							</div>

							<div class="${classes.dataBlock}">
								<div class="${classes.row}"><span class="${classes.info}">${data.bco_santander_cuenta}</span></div>
								<div class="${classes.row}"><span class="${classes.info}">${data.bco_santander_sucursal}</span></div>
							</div>
						</div>
					</div>`
				: ''
		}

	</div>

</section>
	`
	}

	if (!i || !data.verified) {
		content = `<section class="w-screen h-screen p-6 grid place-content-center">
		<div class="bg-slate-400 text-slate-900 leading-tight font-medium pl-16 pr-10 py-5 ml-6 rounded-xl relative shadow-black/30 shadow-xl">
			Necesitas escanear el QR en tu factura para acceder a esta página
			<img src="${Robot}" alt="robot" class="w-20 -left-5 -top-10 absolute" />
		</div>
	</section>`
	}

	document.querySelector('#app').innerHTML = content
})()
