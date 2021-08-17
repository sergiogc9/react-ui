import React from 'react';

import { Icons } from 'components/Icon/types';

const filledIcons: Icons = {
	add: null,
	'add-a-photo': (
		<path d="M2 3C2 2.44772 2.44772 2 3 2H20.1849C20.7372 2 21.1849 2.44772 21.1849 3V12.82C21.1849 13.3722 20.7372 13.82 20.1849 13.82C19.6326 13.82 19.1849 13.3722 19.1849 12.82V4H4V19.1849H12.82C13.3722 19.1849 13.82 19.6326 13.82 20.1849C13.82 20.7372 13.3722 21.1849 12.82 21.1849H3C2.44772 21.1849 2 20.7372 2 20.1849V3ZM9.42084 8.66999C9.69334 8.64333 9.95667 8.75166 10.1325 8.95749L15.1325 14.7908C15.3442 15.0383 15.3925 15.3858 15.2567 15.6817C15.1208 15.9767 14.8258 16.1667 14.5 16.1667H6.16667C5.87 16.1667 5.595 16.0083 5.44584 15.7517C5.29667 15.495 5.29584 15.1783 5.44334 14.92L8.77667 9.08666C8.91084 8.85083 9.15167 8.69583 9.42084 8.66999ZM18.5483 15.0933C19.1006 15.0933 19.5483 15.541 19.5483 16.0933V17.5483H21.0033C21.5556 17.5483 22.0033 17.996 22.0033 18.5483C22.0033 19.1006 21.5556 19.5483 21.0033 19.5483H19.5483V21.0033C19.5483 21.5556 19.1006 22.0033 18.5483 22.0033C17.996 22.0033 17.5483 21.5556 17.5483 21.0033V19.5483H16.0933C15.541 19.5483 15.0933 19.1006 15.0933 18.5483C15.0933 17.996 15.541 17.5483 16.0933 17.5483H17.5483V16.0933C17.5483 15.541 17.996 15.0933 18.5483 15.0933ZM17 7.83333C17 8.75381 16.2538 9.5 15.3333 9.5C14.4129 9.5 13.6667 8.75381 13.6667 7.83333C13.6667 6.91286 14.4129 6.16667 15.3333 6.16667C16.2538 6.16667 17 6.91286 17 7.83333Z" />
	),
	'alert-error': (
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13ZM13 17H11V15H13V17Z" />
	),
	'arrow-down': null,
	'arrow-downward': null,
	'arrow-left': null,
	'arrow-right': null,
	'arrow-up': null,
	'arrow-upward': null,
	bell: (
		<path d="M18.8353 8.66748V10.3344C18.8557 10.8427 18.9808 11.3414 19.2026 11.7993C19.4245 12.2572 19.7383 12.6644 20.1246 12.9955C20.8187 13.5869 21.2534 14.4268 21.3356 15.335C21.3356 17.4185 17.9085 18.6687 12.1678 18.6687C6.42708 18.6687 3 17.4185 3 15.335C3.08216 14.4268 3.51689 13.5869 4.21098 12.9955C4.59725 12.6644 4.91111 12.2572 5.13294 11.7993C5.35478 11.3414 5.47984 10.8427 5.50031 10.3344V8.66748C5.50031 6.89915 6.20277 5.20325 7.45317 3.95286C8.70356 2.70246 10.3995 2 12.1678 2C13.9361 2 15.632 2.70246 16.8824 3.95286C18.1328 5.20325 18.8353 6.89915 18.8353 8.66748ZM10.6916 21.5161C10.2636 21.2017 9.94719 20.759 9.78834 20.2522C10.5334 20.3089 11.3252 20.3356 12.1678 20.3356C13.0104 20.3356 13.8022 20.3073 14.5473 20.2522C14.3884 20.759 14.072 21.2017 13.644 21.5161C13.216 21.8304 12.6988 22 12.1678 22C11.6368 22 11.1196 21.8304 10.6916 21.5161Z" />
	),
	bookmark: (
		<path d="M17 3.00012H7C5.9 3.00012 5.01 3.90012 5.01 5.00012L5 21.0001L12 18.0001L19 21.0001V5.00012C19 3.90012 18.1 3.00012 17 3.00012Z" />
	),
	'burger-menu': null,
	business: null,
	calendar: null,
	'calendar-range': null,
	camera: (
		<path d="M17.4545 2H6.54545C5.94854 2 5.35746 2.11757 4.80598 2.346C4.2545 2.57443 3.75342 2.90925 3.33133 3.33133C2.47889 4.18377 2 5.33993 2 6.54545V17.4545C2 18.0515 2.11757 18.6425 2.346 19.194C2.57443 19.7455 2.90925 20.2466 3.33133 20.6687C4.18377 21.5211 5.33993 22 6.54545 22H17.4545C18.0515 22 18.6425 21.8824 19.194 21.654C19.7455 21.4256 20.2466 21.0908 20.6687 20.6687C21.0908 20.2466 21.4256 19.7455 21.654 19.194C21.8824 18.6425 22 18.0515 22 17.4545V6.54545C22 5.94854 21.8824 5.35746 21.654 4.80598C21.4256 4.2545 21.0908 3.75342 20.6687 3.33133C20.2466 2.90925 19.7455 2.57443 19.194 2.346C18.6425 2.11757 18.0515 2 17.4545 2ZM5.63636 6.54545C5.45656 6.54545 5.2808 6.49214 5.1313 6.39225C4.9818 6.29235 4.86528 6.15037 4.79647 5.98426C4.72767 5.81814 4.70966 5.63536 4.74474 5.45901C4.77982 5.28266 4.8664 5.12068 4.99354 4.99354C5.12068 4.8664 5.28266 4.77982 5.45901 4.74474C5.63536 4.70966 5.81814 4.72767 5.98426 4.79647C6.15037 4.86528 6.29235 4.9818 6.39225 5.1313C6.49214 5.2808 6.54545 5.45656 6.54545 5.63636C6.54545 5.87747 6.44968 6.1087 6.27919 6.27919C6.1087 6.44968 5.87747 6.54545 5.63636 6.54545ZM12 17.4545C10.9212 17.4545 9.86661 17.1346 8.96962 16.5353C8.07262 15.9359 7.3735 15.0841 6.96066 14.0874C6.54782 13.0907 6.4398 11.9939 6.65026 10.9359C6.86073 9.87779 7.38022 8.90589 8.14305 8.14305C8.90589 7.38022 9.87779 6.86073 10.9359 6.65026C11.9939 6.4398 13.0907 6.54782 14.0874 6.96066C15.0841 7.3735 15.9359 8.07262 16.5353 8.96962C17.1346 9.86661 17.4545 10.9212 17.4545 12C17.4545 13.4466 16.8799 14.834 15.8569 15.8569C14.834 16.8799 13.4466 17.4545 12 17.4545Z" />
	),
	chat: (
		<path d="M2.83333 3H16.1667C16.3877 3 16.5996 3.0878 16.7559 3.24408C16.9122 3.40036 17 3.61232 17 3.83333V13C17 13.221 16.9122 13.433 16.7559 13.5893C16.5996 13.7455 16.3877 13.8333 16.1667 13.8333H10.9008L6.01667 17.9033C5.94204 17.9661 5.84753 18.0004 5.75 18C5.68897 17.9999 5.6287 17.9865 5.57333 17.9608C5.50158 17.9272 5.44089 17.8739 5.39838 17.807C5.35587 17.7402 5.33331 17.6626 5.33333 17.5833V13.8333H2.83333C2.61232 13.8333 2.40036 13.7455 2.24408 13.5893C2.0878 13.433 2 13.221 2 13V3.83333C2 3.61232 2.0878 3.40036 2.24408 3.24408C2.40036 3.0878 2.61232 3 2.83333 3ZM18.6667 7.16667H21.1667C21.3877 7.16667 21.5996 7.25446 21.7559 7.41074C21.9122 7.56702 22 7.77899 22 8V17.1667C22 17.3877 21.9122 17.5996 21.7559 17.7559C21.5996 17.9122 21.3877 18 21.1667 18H18.6667V20.9167C18.6667 20.9959 18.6441 21.0735 18.6016 21.1404C18.5591 21.2072 18.4984 21.2606 18.4267 21.2942C18.3713 21.3198 18.311 21.3332 18.25 21.3333C18.151 21.3347 18.0549 21.3004 17.9792 21.2367L14.095 18H8.49999L11.5 15.5H16.1667C16.8297 15.5 17.4656 15.2366 17.9344 14.7678C18.4033 14.2989 18.6667 13.663 18.6667 13V7.16667Z" />
	),
	check: null,
	'check-circle': (
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.29 16.29L5.7 12.7C5.31 12.31 5.31 11.68 5.7 11.29C6.09 10.9 6.72 10.9 7.11 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.7 16.29C10.32 16.68 9.68 16.68 9.29 16.29Z" />
	),
	'circle-small': <circle cx="12" cy="12" r="4" />,
	clock: (
		<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM15.55 15.8L11.47 13.29C11.17 13.11 10.99 12.79 10.99 12.44V7.75C11 7.34 11.34 7 11.75 7C12.16 7 12.5 7.34 12.5 7.75V12.2L16.34 14.51C16.7 14.73 16.82 15.2 16.6 15.56C16.38 15.91 15.91 16.02 15.55 15.8Z" />
	),
	close: null,
	'cloud-upload': (
		<path d="M13.6603 4.00005C11.6923 3.99311 9.78589 4.68463 8.28068 5.95137C6.77546 7.2181 5.76928 8.97775 5.44147 10.9167C4.31225 11.2875 3.35202 12.048 2.73275 13.0618C2.11348 14.0756 1.87561 15.2766 2.06174 16.4497C2.24787 17.6227 2.84585 18.6913 3.74858 19.464C4.65132 20.2367 5.79984 20.663 6.98849 20.6667H13.6603C15.8721 20.6667 17.9933 19.7887 19.5574 18.2259C21.1214 16.6631 22 14.5435 22 12.3334C22 10.1232 21.1214 8.00362 19.5574 6.44082C17.9933 4.87802 15.8721 4.00005 13.6603 4.00005ZM12.8263 14.8334V18.1667H11.1584V14.8334H7.82246L11.9923 9.83337L16.1622 14.8334H12.8263Z" />
	),
	dashboard: (
		<path d="M3.83333 13.6667H10.5C10.96 13.6667 11.3333 13.2933 11.3333 12.8333V2.83333C11.3333 2.37333 10.96 2 10.5 2H3.83333C3.37333 2 3 2.37333 3 2.83333V12.8333C3 13.2933 3.37333 13.6667 3.83333 13.6667ZM3.83333 22H10.5C10.96 22 11.3333 21.6267 11.3333 21.1667V16.1667C11.3333 15.7067 10.96 15.3333 10.5 15.3333H3.83333C3.37333 15.3333 3 15.7067 3 16.1667V21.1667C3 21.6267 3.37333 22 3.83333 22ZM20.5 8.66667H13.8333C13.3733 8.66667 13 8.29333 13 7.83333V2.83333C13 2.37333 13.3733 2 13.8333 2H20.5C20.96 2 21.3333 2.37333 21.3333 2.83333V7.83333C21.3333 8.29333 20.96 8.66667 20.5 8.66667ZM13.8333 22H20.5C20.96 22 21.3333 21.6267 21.3333 21.1667V11.1667C21.3333 10.7067 20.96 10.3333 20.5 10.3333H13.8333C13.3733 10.3333 13 10.7067 13 11.1667V21.1667C13 21.6267 13.3733 22 13.8333 22Z" />
	),
	delete: (
		<path d="M20.6667 5.33333C20.6667 3.04333 16.3467 2 12.3333 2C8.32 2 4 3.04333 4 5.33333C4.00408 5.41135 4.01327 5.48902 4.0275 5.56583L5.68167 19.2425C5.87333 21.1375 9.26417 22 12.3333 22C15.4025 22 18.7933 21.1375 18.9833 19.26L20.6392 5.56583C20.6534 5.48902 20.6626 5.41135 20.6667 5.33333ZM12.3333 3.66667C16.7083 3.66667 19 4.905 19 5.33333C19 5.76167 16.7083 7 12.3333 7C7.95833 7 5.66667 5.76167 5.66667 5.33333C5.66667 4.905 7.95833 3.66667 12.3333 3.66667Z" />
	),
	'desktop-windows': null,
	detail: (
		<path d="M8.95663 2H15.5655C16.0223 2 16.3916 2.3701 16.3916 2.8261V6.13052C16.3916 6.58653 16.0223 6.95663 15.5655 6.95663H13.9133C13.9133 6.04378 13.1739 5.30442 12.261 5.30442C11.3482 5.30442 10.6088 6.04378 10.6088 6.95663H8.95663C8.49979 6.95663 8.13053 6.58653 8.13053 6.13052V2.8261C8.13053 2.3701 8.49979 2 8.95663 2ZM3 4.47832C3 3.92603 3.44772 3.47832 4 3.47832H5.65221C6.20449 3.47832 6.65221 3.92603 6.65221 4.47832C6.65221 5.0306 6.20449 5.47832 5.65221 5.47832H5V20.0004H19.5221V5.47832H18.8699C18.3176 5.47832 17.8699 5.0306 17.8699 4.47832C17.8699 3.92603 18.3176 3.47832 18.8699 3.47832H20.5221C21.0744 3.47832 21.5221 3.92603 21.5221 4.47832V21.0004C21.5221 21.5527 21.0744 22.0004 20.5221 22.0004H4C3.44772 22.0004 3 21.5527 3 21.0004V4.47832ZM8.13053 10.9133C7.57824 10.9133 7.13053 11.361 7.13053 11.9133C7.13053 12.4655 7.57824 12.9133 8.13053 12.9133H16.3916C16.9439 12.9133 17.3916 12.4655 17.3916 11.9133C17.3916 11.361 16.9439 10.9133 16.3916 10.9133H8.13053ZM8.13053 15.0438C7.57824 15.0438 7.13053 15.4915 7.13053 16.0438C7.13053 16.5961 7.57824 17.0438 8.13053 17.0438H16.3916C16.9439 17.0438 17.3916 16.5961 17.3916 16.0438C17.3916 15.4915 16.9439 15.0438 16.3916 15.0438H8.13053Z" />
	),
	disability: null,
	document: (
		<path d="M4 2.83333V21.1667C4 21.3877 4.0878 21.5996 4.24408 21.7559C4.40036 21.9122 4.61232 22 4.83333 22H19.8333C20.0543 22 20.2663 21.9122 20.4226 21.7559C20.5789 21.5996 20.6667 21.3877 20.6667 21.1667V2.83333C20.6667 2.61232 20.5789 2.40036 20.4226 2.24408C20.2663 2.0878 20.0543 2 19.8333 2H4.83333C4.61232 2 4.40036 2.0878 4.24408 2.24408C4.0878 2.40036 4 2.61232 4 2.83333ZM12.3333 17H6.5V15.3333H12.3333V17ZM18.1667 12.8333H6.5V11.1667H18.1667V12.8333ZM18.1667 8.66667H6.5V7H18.1667V8.66667Z" />
	),
	edit: null,
	eye: (
		<path d="M12 5C7.45455 5 3.57273 7.82727 2 11.8182C3.57273 15.8091 7.45455 18.6364 12 18.6364C16.5455 18.6364 20.4273 15.8091 22 11.8182C20.4273 7.82727 16.5455 5 12 5ZM12 16.3636C9.49091 16.3636 7.45455 14.3273 7.45455 11.8182C7.45455 9.30909 9.49091 7.27273 12 7.27273C14.5091 7.27273 16.5455 9.30909 16.5455 11.8182C16.5455 14.3273 14.5091 16.3636 12 16.3636ZM12 9.09091C10.4909 9.09091 9.27273 10.3091 9.27273 11.8182C9.27273 13.3273 10.4909 14.5455 12 14.5455C13.5091 14.5455 14.7273 13.3273 14.7273 11.8182C14.7273 10.3091 13.5091 9.09091 12 9.09091Z" />
	),
	'eye-off': (
		<g>
			<path d="M21.535 10.5266C20.9131 9.65035 20.2186 8.82813 19.4587 8.06866L16.1085 11.4212C16.1408 11.6109 16.16 11.8025 16.1659 11.9948C16.1659 13.1005 15.727 14.1608 14.9458 14.9426C14.1645 15.7244 13.1049 16.1636 12 16.1636C11.8079 16.1577 11.6163 16.1384 11.4268 16.1061L8.71313 18.8217C9.75348 19.2619 10.8705 19.492 12 19.4987C16.7558 19.4987 20.2527 15.2782 21.5358 13.4623C21.838 13.0325 22.0001 12.5198 22 11.9943C21.9998 11.4688 21.8374 10.9562 21.535 10.5266Z" />
			<path d="M12.0001 4.49103C7.24425 4.49103 3.75156 8.71152 2.46429 10.5275C2.16215 10.957 2 11.4695 2 11.9949C2 12.5202 2.16215 13.0327 2.46429 13.4623C3.56373 15.0306 4.90981 16.4103 6.45023 17.5477L9.05309 14.943C8.6662 14.5559 8.35929 14.0964 8.14989 13.5906C7.94048 13.0848 7.83268 12.5427 7.83264 11.9952C7.83257 10.8895 8.27142 9.82902 9.05268 9.04711C9.83393 8.26521 10.8936 7.82589 11.9985 7.82581C13.1035 7.82574 14.1632 8.2649 14.9445 9.04669L9.05393 14.943L17.5524 6.43869C15.952 5.22203 14.0093 4.54058 12.0001 4.49103Z" />
			<path d="M2.83545 22C2.67068 22 2.50963 21.951 2.37265 21.8594C2.23566 21.7678 2.1289 21.6376 2.06585 21.4853C2.00281 21.333 1.98631 21.1653 2.01844 21.0036C2.05058 20.8419 2.1299 20.6934 2.24639 20.5768L20.5764 2.23405C20.7335 2.08217 20.944 1.99813 21.1625 2.00003C21.3809 2.00193 21.5899 2.08962 21.7444 2.2442C21.8988 2.39879 21.9865 2.60791 21.9884 2.82652C21.9903 3.04512 21.9063 3.25573 21.7545 3.41298L3.42451 21.7557C3.26829 21.9121 3.0564 22 2.83545 22Z" />
		</g>
	),
	filter: null,
	'first-page': null,
	flash: (
		<path d="M6.87735 2.73688C6.996 2.30182 7.39116 2 7.84211 2H14.4737C14.7875 2 15.0831 2.14729 15.272 2.3978C15.461 2.64832 15.5214 2.973 15.4352 3.27472L13.9047 8.63158H18.2632C18.6512 8.63158 19.0042 8.85604 19.1688 9.20742C19.3333 9.55881 19.2798 9.97368 19.0314 10.2718L9.5577 21.6402C9.25914 21.9985 8.75256 22.1028 8.33672 21.8916C7.92089 21.6805 7.70623 21.2099 7.81934 20.7575L9.40344 14.4211H5.00001C4.68834 14.4211 4.39449 14.2757 4.2053 14.028C4.01612 13.7804 3.95324 13.4586 4.03525 13.1579L6.87735 2.73688Z" />
	),
	fullscreen: null,
	'fullscreen-exit': null,
	'grid-view': null,
	help: (
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.67 12.68 13.31 13.14 13.13 13.86C13.05 14.18 13 14.54 13 15H11V14.5C11 14.04 11.08 13.6 11.22 13.19C11.42 12.61 11.75 12.09 12.17 11.67L13.41 10.41C13.87 9.97 14.09 9.31 13.96 8.61C13.83 7.89 13.27 7.28 12.57 7.08C11.46 6.77 10.43 7.4 10.1 8.35C9.98 8.72 9.67 9 9.28 9H8.98C8.4 9 8 8.44 8.16 7.88C8.59 6.41 9.84 5.29 11.39 5.05C12.91 4.81 14.36 5.6 15.26 6.85C16.44 8.48 16.09 10.23 15.07 11.25Z" />
	),
	home: (
		<path d="M21.6843 10.6882L12.5176 3.18821C12.3688 3.06649 12.1824 3 11.9901 3C11.7978 3 11.6115 3.06649 11.4626 3.18821L2.29595 10.6882C2.12872 10.8293 2.02369 11.0305 2.00354 11.2484C1.98339 11.4663 2.04974 11.6833 2.18826 11.8527C2.32678 12.0221 2.52635 12.1302 2.74389 12.1536C2.96142 12.1771 3.17947 12.1141 3.35095 11.9782L4.49011 11.0465V20.4999C4.49011 20.7209 4.57791 20.9328 4.73419 21.0891C4.89047 21.2454 5.10243 21.3332 5.32345 21.3332H10.3234V16.3332H13.6568V21.3332H18.6568C18.8778 21.3332 19.0898 21.2454 19.246 21.0891C19.4023 20.9328 19.4901 20.7209 19.4901 20.4999V11.0465L20.6293 11.9782C20.7137 12.0495 20.8115 12.1032 20.917 12.1363C21.0224 12.1695 21.1334 12.1813 21.2434 12.1711C21.3534 12.1609 21.4604 12.1289 21.5579 12.0771C21.6555 12.0252 21.7418 11.9544 21.8117 11.8689C21.8817 11.7833 21.934 11.6847 21.9654 11.5788C21.9969 11.4729 22.007 11.3617 21.9952 11.2518C21.9833 11.142 21.9497 11.0356 21.8964 10.9388C21.843 10.842 21.7709 10.7568 21.6843 10.6882Z" />
	),
	info: (
		<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z" />
	),
	insights: null,
	'kebab-horizontal': null,
	'kebab-vertical': null,
	'last-page': null,
	layers: (
		<path d="M12.2081 2.05307L21.7879 7.46987C21.8524 7.50609 21.9061 7.55884 21.9434 7.6227C21.9808 7.68655 22.0005 7.75921 22.0005 7.83321C22.0005 7.90721 21.9808 7.97987 21.9434 8.04372C21.9061 8.10758 21.8524 8.16033 21.7879 8.19655L12.2081 13.6134C12.1456 13.6487 12.075 13.6673 12.0032 13.6673C11.9313 13.6673 11.8608 13.6487 11.7982 13.6134L2.21845 8.19655C2.15395 8.16033 2.10026 8.10758 2.06289 8.04372C2.02552 7.97987 2.00582 7.90721 2.00582 7.83321C2.00582 7.75921 2.02552 7.68655 2.06289 7.6227C2.10026 7.55884 2.15395 7.50609 2.21845 7.46987L11.7982 2.05307C11.8609 2.01826 11.9315 2 12.0032 2C12.0749 2 12.1454 2.01826 12.2081 2.05307ZM21.7879 11.6367L20.4384 10.8741L13.0245 15.0642C12.712 15.2408 12.3591 15.3336 12.0003 15.3336C11.6414 15.3336 11.2885 15.2408 10.976 15.0642L3.56213 10.8733L2.21263 11.6358C2.14813 11.672 2.09444 11.7248 2.05707 11.7887C2.0197 11.8525 2 11.9252 2 11.9992C2 12.0732 2.0197 12.1458 2.05707 12.2097C2.09444 12.2735 2.14813 12.3263 2.21263 12.3625L11.7924 17.7793C11.8549 17.8147 11.9255 17.8332 11.9973 17.8332C12.0691 17.8332 12.1397 17.8147 12.2023 17.7793L21.782 12.3625C21.8465 12.3263 21.9002 12.2735 21.9376 12.2097C21.975 12.1458 21.9947 12.0732 21.9947 11.9992C21.9947 11.9252 21.975 11.8525 21.9376 11.7887C21.9002 11.7248 21.8465 11.672 21.782 11.6358L21.7879 11.6367ZM21.7879 15.8034L20.4384 15.0409L13.0245 19.231C12.712 19.4076 12.3591 19.5004 12.0003 19.5004C11.6414 19.5004 11.2885 19.4076 10.976 19.231L3.56213 15.0401L2.21263 15.8026C2.14813 15.8388 2.09444 15.8916 2.05707 15.9554C2.0197 16.0193 2 16.0919 2 16.1659C2 16.2399 2.0197 16.3126 2.05707 16.3764C2.09444 16.4403 2.14813 16.4931 2.21263 16.5293L11.7924 21.9461C11.8549 21.9814 11.9255 22 11.9973 22C12.0691 22 12.1397 21.9814 12.2023 21.9461L21.782 16.5293C21.8465 16.4931 21.9002 16.4403 21.9376 16.3764C21.975 16.3126 21.9947 16.2399 21.9947 16.1659C21.9947 16.0919 21.975 16.0193 21.9376 15.9554C21.9002 15.8916 21.8465 15.8388 21.782 15.8026L21.7879 15.8034Z" />
	),
	list: null,
	'list-view': null,
	location: (
		<path d="M11.8261 2C8 2 4 4.95652 4 9.82609C4 14.4348 10.9565 21.4783 11.2174 21.7391C11.3913 21.913 11.5652 22 11.8261 22C12.087 22 12.2609 21.913 12.4348 21.7391C12.6957 21.4783 19.6522 14.4348 19.6522 9.82609C19.6522 4.95652 15.6522 2 11.8261 2ZM11.8261 12.4348C10.3478 12.4348 9.21739 11.3043 9.21739 9.82609C9.21739 8.34783 10.3478 7.21739 11.8261 7.21739C13.3043 7.21739 14.4348 8.34783 14.4348 9.82609C14.4348 11.3043 13.3043 12.4348 11.8261 12.4348Z" />
	),
	mail: (
		<path d="M4.50002 4H19.5C20.1631 4 20.799 4.26339 21.2678 4.73223C21.7366 5.20107 22 5.83696 22 6.5V7.33333C22.0008 7.4836 21.9629 7.63155 21.8899 7.76291C21.8169 7.89427 21.7114 8.00462 21.5834 8.08333L12.4167 13.0833C12.2887 13.1507 12.144 13.1796 12 13.1667C11.856 13.1796 11.7113 13.1507 11.5834 13.0833L2.41669 8.08333C2.28868 8.00462 2.1831 7.89427 2.11012 7.76291C2.03715 7.63155 1.99923 7.4836 2.00002 7.33333V6.5C2.00002 5.83696 2.26342 5.20107 2.73226 4.73223C3.2011 4.26339 3.83698 4 4.50002 4ZM12 14.8333C12.4147 14.8515 12.8241 14.7345 13.1667 14.5L22 9.75V18.1667C22 18.8297 21.7366 19.4656 21.2678 19.9344C20.7989 20.4033 20.1631 20.6667 19.5 20.6667H4.50001C3.83697 20.6667 3.20109 20.4033 2.73224 19.9344C2.2634 19.4656 2.00001 18.8297 2.00001 18.1667V9.75L10.8333 14.5C11.1759 14.7345 11.5853 14.8515 12 14.8333Z" />
	),
	'new-tab': null,
	'power-on': (
		<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34871 20.9426 6.80684 19.0679 4.9321C17.1932 3.05736 14.6513 2.00287 12 2V2ZM11.1667 5.33333H12.8333V12H11.1667V5.33333ZM12 17.8333C10.8739 17.8333 9.77188 17.5073 8.82697 16.8948C7.88206 16.2822 7.13466 15.4092 6.67498 14.3812C6.21529 13.3532 6.06299 12.2141 6.23645 11.1015C6.40991 9.9888 6.90172 8.95013 7.6525 8.11083L8.20834 7.49L9.45 8.60167L8.89417 9.2225C8.35762 9.82192 8.00607 10.5638 7.88196 11.3587C7.75786 12.1535 7.86651 12.9673 8.1948 13.7018C8.52308 14.4362 9.05697 15.0599 9.73198 15.4976C10.407 15.9352 11.1943 16.1681 11.9988 16.1681C12.8032 16.1681 13.5905 15.9352 14.2655 15.4976C14.9405 15.0599 15.4744 14.4362 15.8027 13.7018C16.131 12.9673 16.2396 12.1535 16.1155 11.3587C15.9914 10.5638 15.6399 9.82192 15.1033 9.2225L14.5475 8.6025L15.7883 7.49L16.3442 8.11083C17.0948 8.94992 17.5865 9.98828 17.7601 11.1006C17.9337 12.213 17.7816 13.3518 17.3224 14.3797C16.8631 15.4076 16.1162 16.2806 15.1718 16.8934C14.2274 17.5062 13.1258 17.8327 12 17.8333Z" />
	),
	quickreply: (
		<path d="M20 2.00012C21.1 2.00012 22 2.90012 22 4.00012V10.0001H16C15.45 10.0001 15 10.4501 15 11.0001V18.0001H6L2 22.0001L2.01 4.00012C2.01 2.90012 2.9 2.00012 4 2.00012H20ZM20.3 16.0001H21.69C22.06 16.0001 22.3 16.3901 22.13 16.7201L19.47 22.0501C19.36 22.2901 19 22.2001 19 21.9401V18.0001H17.5C17.22 18.0001 17 17.7801 17 17.5001V12.5001C17 12.2201 17.22 12.0001 17.5 12.0001H21.24C21.6 12.0001 21.84 12.3701 21.7 12.7001L20.3 16.0001Z" />
	),
	remote: null,
	salary: null,
	search: null,
	settings: (
		<path d="M20.3333 10.3333H19.3075C19.1201 9.51077 18.7943 8.72601 18.3442 8.0125L19.0708 7.28583C19.3744 6.9715 19.5424 6.55049 19.5386 6.1135C19.5348 5.6765 19.3595 5.25848 19.0505 4.94947C18.7415 4.64046 18.3235 4.46517 17.8865 4.46138C17.4495 4.45758 17.0285 4.62557 16.7142 4.92917L15.9875 5.65583C15.274 5.20567 14.4892 4.87993 13.6667 4.6925V3.66667C13.6667 3.22464 13.4911 2.80072 13.1785 2.48816C12.8659 2.17559 12.442 2 12 2C11.558 2 11.134 2.17559 10.8215 2.48816C10.5089 2.80072 10.3333 3.22464 10.3333 3.66667V4.6925C9.51077 4.87993 8.72601 5.20567 8.0125 5.65583L7.28583 4.92917C6.9715 4.62557 6.55049 4.45758 6.1135 4.46138C5.6765 4.46517 5.25848 4.64046 4.94947 4.94947C4.64046 5.25848 4.46517 5.6765 4.46138 6.1135C4.45758 6.55049 4.62557 6.9715 4.92917 7.28583L5.65583 8.0125C5.20567 8.72601 4.87993 9.51077 4.6925 10.3333H3.66667C3.22464 10.3333 2.80072 10.5089 2.48816 10.8215C2.17559 11.134 2 11.558 2 12C2 12.442 2.17559 12.8659 2.48816 13.1785C2.80072 13.4911 3.22464 13.6667 3.66667 13.6667H4.6925C4.87993 14.4892 5.20567 15.274 5.65583 15.9875L4.92917 16.7142C4.62557 17.0285 4.45758 17.4495 4.46138 17.8865C4.46517 18.3235 4.64046 18.7415 4.94947 19.0505C5.25848 19.3595 5.6765 19.5348 6.1135 19.5386C6.55049 19.5424 6.9715 19.3744 7.28583 19.0708L8.0125 18.3442C8.72601 18.7943 9.51077 19.1201 10.3333 19.3075V20.3333C10.3333 20.7754 10.5089 21.1993 10.8215 21.5118C11.134 21.8244 11.558 22 12 22C12.442 22 12.8659 21.8244 13.1785 21.5118C13.4911 21.1993 13.6667 20.7754 13.6667 20.3333V19.3075C14.4892 19.1201 15.274 18.7943 15.9875 18.3442L16.7142 19.0708C17.0285 19.3744 17.4495 19.5424 17.8865 19.5386C18.3235 19.5348 18.7415 19.3595 19.0505 19.0505C19.3595 18.7415 19.5348 18.3235 19.5386 17.8865C19.5424 17.4495 19.3744 17.0285 19.0708 16.7142L18.3442 15.9875C18.7943 15.274 19.1201 14.4892 19.3075 13.6667H20.3333C20.7754 13.6667 21.1993 13.4911 21.5118 13.1785C21.8244 12.8659 22 12.442 22 12C22 11.558 21.8244 11.134 21.5118 10.8215C21.1993 10.5089 20.7754 10.3333 20.3333 10.3333ZM12 15.3333C11.3407 15.3333 10.6963 15.1378 10.1481 14.7716C9.59994 14.4053 9.17269 13.8847 8.9204 13.2756C8.66811 12.6665 8.6021 11.9963 8.73072 11.3497C8.85933 10.7031 9.1768 10.1092 9.64298 9.64298C10.1092 9.1768 10.7031 8.85933 11.3497 8.73072C11.9963 8.6021 12.6665 8.66811 13.2756 8.9204C13.8847 9.17269 14.4053 9.59994 14.7716 10.1481C15.1378 10.6963 15.3333 11.3407 15.3333 12C15.3333 12.8841 14.9821 13.7319 14.357 14.357C13.7319 14.9821 12.8841 15.3333 12 15.3333Z" />
	),
	share: (
		<path d="M18 8.66667C19.8333 8.66667 21.3333 7.16667 21.3333 5.33333C21.3333 3.5 19.8333 2 18 2C16.1667 2 14.6667 3.5 14.6667 5.33333C14.6667 5.66667 14.75 5.91667 14.8333 6.16667L8.75 9.66667C8.08333 9.08333 7.25 8.66667 6.33333 8.66667C4.5 8.66667 3 10.1667 3 12C3 13.8333 4.5 15.3333 6.33333 15.3333C7.25 15.3333 8.08333 14.9167 8.75 14.3333L14.8333 17.8333C14.75 18.0833 14.6667 18.4167 14.6667 18.6667C14.6667 20.5 16.1667 22 18 22C19.8333 22 21.3333 20.5 21.3333 18.6667C21.3333 16.8333 19.8333 15.3333 18 15.3333C17.0833 15.3333 16.25 15.75 15.5833 16.3333L9.5 12.8333C9.58333 12.5833 9.66667 12.3333 9.66667 12C9.66667 11.6667 9.58333 11.4167 9.5 11.1667L15.5833 7.66667C16.25 8.25 17.0833 8.66667 18 8.66667Z" />
	),
	shop: (
		<path d="M19.3808 2.40417L21.8808 6.57083C21.9587 6.70042 21.9999 6.84878 22 7C22.0018 7.64416 21.8165 8.27499 21.4666 8.81587C21.1167 9.35676 20.6174 9.78443 20.0291 10.047C19.4409 10.3095 18.7891 10.3956 18.1528 10.2948C17.5166 10.194 16.9233 9.91065 16.445 9.47916C15.8357 10.0308 15.0431 10.3363 14.2212 10.3363C13.3993 10.3363 12.6068 10.0308 11.9975 9.47916C11.3885 10.0296 10.5968 10.3344 9.77583 10.3344C8.9549 10.3344 8.1632 10.0296 7.55417 9.47916C6.94335 10.0309 6.14895 10.3354 5.32584 10.3333H5.31917C4.4371 10.3311 3.59199 9.97877 2.9696 9.35372C2.3472 8.72867 1.99846 7.88207 2.00001 7C2.00005 6.84878 2.04125 6.70042 2.11917 6.57083L4.61917 2.40417C4.69322 2.28091 4.79791 2.17891 4.92306 2.10808C5.0482 2.03726 5.18954 2.00003 5.33334 2H18.6667C18.8105 2.00003 18.9518 2.03726 19.0769 2.10808C19.2021 2.17891 19.3068 2.28091 19.3808 2.40417ZM16.4475 11.4767C17.1412 11.8215 17.9054 12.0006 18.68 12.0001C18.955 11.9964 19.2292 11.9702 19.5 11.9217V20.3334C19.5 20.5544 19.4122 20.7664 19.2559 20.9226C19.0996 21.0789 18.8877 21.1667 18.6666 21.1667H13.6667V16.1667H10.3333V21.1667H5.33332C5.11231 21.1667 4.90035 21.0789 4.74407 20.9226C4.58779 20.7664 4.49999 20.5544 4.49999 20.3334V11.925C4.77279 11.9723 5.04897 11.9974 5.32582 12.0001C6.09891 12.0013 6.86173 11.823 7.55416 11.4792C7.75886 11.5806 7.97017 11.668 8.18666 11.7409C8.80603 11.9514 9.461 12.0371 10.1137 11.9929C10.7664 11.9487 11.4038 11.7755 11.9892 11.4834L11.9983 11.4792C12.2033 11.5806 12.4149 11.668 12.6317 11.7409C13.2513 11.951 13.9064 12.0363 14.5591 11.992C15.2119 11.9476 15.8495 11.7745 16.435 11.4826L16.4475 11.4767Z" />
	),
	'shop-bag': (
		<path d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM10 10C10 10.55 9.55 11 9 11C8.45 11 8 10.55 8 10V8H10V10ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM16 10C16 10.55 15.55 11 15 11C14.45 11 14 10.55 14 10V8H16V10Z" />
	),
	smartphone: null,
	star: (
		<path d="M14.43,10l-1.47-4.84c-0.29-0.95-1.63-0.95-1.91,0L9.57,10H5.12c-0.97,0-1.37,1.25-0.58,1.81l3.64,2.6l-1.43,4.61 c-0.29,0.93,0.79,1.68,1.56,1.09L12,17.31l3.69,2.81c0.77,0.59,1.85-0.16,1.56-1.09l-1.43-4.61l3.64-2.6 c0.79-0.57,0.39-1.81-0.58-1.81H14.43z" />
	),
	'unfold-less': null,
	'unfold-more': null,
	upload: (
		<g>
			<path d="M21.1063 20.9014L18.4967 11.333C18.4465 11.1489 18.3372 10.9864 18.1855 10.8705C18.0338 10.7547 17.8482 10.6919 17.6573 10.692H15.0478V12.4317H16.9928L19.1274 20.2603H4.00936L6.14397 12.4317H8.08896V10.692H5.47941C5.28854 10.6919 5.10295 10.7547 4.95126 10.8705C4.79957 10.9864 4.6902 11.1489 4.64 11.333L2.03044 20.9014C2.01034 20.976 2.0001 21.0529 2 21.1302C2 21.3609 2.09164 21.5821 2.25477 21.7453C2.4179 21.9084 2.63915 22 2.86985 22H20.2669C20.3441 21.9999 20.4211 21.9897 20.4957 21.9696C20.6059 21.9396 20.7091 21.8881 20.7995 21.8182C20.8899 21.7482 20.9656 21.6612 21.0223 21.562C21.079 21.4628 21.1156 21.3534 21.13 21.2401C21.1444 21.1267 21.1364 21.0116 21.1063 20.9014Z" />
			<path d="M7.65403 7.21251H10.6985V16.7809C10.6985 17.0116 10.7902 17.2328 10.9533 17.396C11.1164 17.5591 11.3377 17.6507 11.5684 17.6507C11.7991 17.6507 12.0203 17.5591 12.1834 17.396C12.3466 17.2328 12.4382 17.0116 12.4382 16.7809V7.21251H15.4827C15.5667 7.21249 15.6489 7.18814 15.7194 7.1424C15.7899 7.09666 15.8456 7.03148 15.8798 6.95475C15.9141 6.87802 15.9253 6.79301 15.9123 6.71001C15.8992 6.62702 15.8624 6.54957 15.8063 6.48705L11.8919 2.13779C11.8501 2.09422 11.7998 2.05956 11.7442 2.03588C11.6886 2.0122 11.6288 2 11.5684 2C11.5079 2 11.4481 2.0122 11.3925 2.03588C11.3369 2.05956 11.2867 2.09422 11.2448 2.13779L7.33045 6.48705C7.27432 6.54957 7.23751 6.62702 7.22446 6.71001C7.21141 6.79301 7.22267 6.87802 7.2569 6.95475C7.29112 7.03148 7.34684 7.09666 7.41732 7.1424C7.4878 7.18814 7.57001 7.21249 7.65403 7.21251Z" />
		</g>
	),
	'user-circle': (
		<path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM8.66667 10.3333C8.66667 8.4925 10.2033 7 12 7C13.7967 7 15.3333 8.4925 15.3333 10.3333V11.1667C15.3333 13.0075 13.7967 14.5 12 14.5C10.2033 14.5 8.66667 13.0075 8.66667 11.1667V10.3333ZM12 20.3333C9.9725 20.3333 8.1125 19.6033 6.66583 18.395C7.365 17.0758 8.73583 16.1667 10.3333 16.1667H13.6667C15.2642 16.1667 16.635 17.0758 17.3342 18.395C15.8875 19.6033 14.0275 20.3333 12 20.3333Z" />
	),
	user: (
		<path d="M16.4 6.58926C16.4 9.07997 14.48 11.9754 12 11.9754C9.52002 11.9754 7.60002 9.07997 7.60002 6.58926C7.60002 5.37211 8.06359 4.20481 8.88875 3.34416C9.71391 2.48351 10.8331 2 12 2C13.167 2 14.2861 2.48351 15.1113 3.34416C15.9364 4.20481 16.4 5.37211 16.4 6.58926ZM10.4 13.6442H13.6C15.2968 13.6461 16.9236 14.3501 18.1234 15.6015C19.3232 16.8529 19.9981 18.5497 20 20.3194C20.0001 20.4963 19.9463 20.6687 19.8464 20.8116C19.7464 20.9546 19.6055 21.0607 19.444 21.1146C17.0145 21.7702 14.5084 22.0643 12 21.9883C9.4916 22.0643 6.98547 21.7702 4.556 21.1146C4.39447 21.0607 4.25357 20.9546 4.15363 20.8116C4.05369 20.6687 3.99989 20.4963 4 20.3194C4.00191 18.5497 4.6768 16.8529 5.87662 15.6015C7.07644 14.3501 8.7032 13.6461 10.4 13.6442Z" />
	),
	users: (
		<path d="M12 6.58333C12 8.65417 13.6792 10.3333 15.75 10.3333C17.8208 10.3333 19.5 8.65417 19.5 6.58333V5.75C19.5 3.67917 17.8208 2 15.75 2C13.6792 2 12 3.67917 12 5.75V6.58333ZM4.5 12C4.5 13.8408 5.9925 15.3333 7.83333 15.3333C9.67417 15.3333 11.1667 13.8408 11.1667 12V11.1667C11.1667 9.32583 9.67417 7.83333 7.83333 7.83333C5.9925 7.83333 4.5 9.32583 4.5 11.1667V12ZM17.8333 11.1667H13.6667C13.3808 11.1667 13.1025 11.1958 12.8333 11.2508V12C12.8333 13.1225 12.4558 14.1542 11.8283 14.9883C13.8883 15.8892 15.3333 17.945 15.3333 20.3333V22H21.1667C21.6267 22 22 21.6267 22 21.1667V15.3333C22 13.0325 20.1342 11.1667 17.8333 11.1667ZM2 21.1667C2 21.6267 2.37333 22 2.83333 22H12.8333C13.2933 22 13.6667 21.6267 13.6667 21.1667V20.3333C13.6667 18.0325 11.8008 16.1667 9.5 16.1667H6.16667C3.86583 16.1667 2 18.0325 2 20.3333V21.1667Z" />
	),
	verified: (
		<path d="M11.8893 2.01618L19.7328 3.5174C19.9298 3.55588 20.1068 3.65837 20.2339 3.80748C20.361 3.95659 20.4302 4.14316 20.43 4.33557V12.8258C20.43 19.498 11.715 22 11.715 22C11.715 22 3 19.498 3 12.8258V4.33557C3.00008 4.14222 3.07035 3.95491 3.1988 3.80567C3.32725 3.65642 3.50589 3.55453 3.70417 3.5174L11.5477 2.01618C11.6604 1.99461 11.7765 1.99461 11.8893 2.01618ZM16.4746 9.65082C16.8341 9.2315 16.7855 8.6002 16.3662 8.24077C15.9469 7.88135 15.3156 7.92991 14.9561 8.34924L10.5153 13.5302L8.70711 11.722C8.31658 11.3315 7.68342 11.3315 7.29289 11.722C6.90237 12.1125 6.90237 12.7457 7.29289 13.1362L9.86469 15.708C10.0616 15.905 10.3318 16.0108 10.6102 16.0002C10.8885 15.9895 11.1498 15.8632 11.3311 15.6517L16.4746 9.65082Z" />
	),
	wifi: null,
	work: (
		<path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" />
	)
};

export default filledIcons;
