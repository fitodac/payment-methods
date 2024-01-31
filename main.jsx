import './style.css'
import PaypalLogo from './img/paypal.svg'

document.querySelector('#app').innerHTML = `
<section class="container mx-auto">

	<div class="grid pt-10 md:grid-cols-2 lg:grid-cols-3">
		<div class="">
			<div class="bg-black/30 p-6 rounded-xl">
				<img src="${PaypalLogo}" alt="PayPal" class="w-24" />
			</div>
		</div>
	</div>

</section>`

setupCounter(document.querySelector('#counter'))
