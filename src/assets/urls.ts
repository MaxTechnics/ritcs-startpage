import img_account_management from '@/assets/image/icons/account_management.svg';
import img_help_and_info from '@/assets/image/icons/help_and_info.svg';
import img_canvas from '@/assets/image/icons/canvas.svg';
import img_ms_teams from '@/assets/image/icons/ms_teams.svg';
import img_timetable_student from '@/assets/image/icons/timetable_student.svg';
import img_timetable_employees from '@/assets/image/icons/timetable_employees.svg';
import img_library from '@/assets/image/icons/library.svg';
import img_language_learning from '@/assets/image/icons/language_learning.svg';
import img_ehbib_search from '@/assets/image/icons/ehbib_search.svg';
import img_dictionaries from '@/assets/image/icons/dictionaries.svg';
import img_email from '@/assets/image/icons/email.svg';
import img_surveys from '@/assets/image/icons/surveys.svg';
import img_helpdesk from '@/assets/image/icons/helpdesk.svg';
import img_ibamaflex from '@/assets/image/icons/ibamaflex.svg';
import img_onstage from '@/assets/image/icons/onstage.svg';
import img_wooclap from '@/assets/image/icons/wooclap.svg';
import img_procure from '@/assets/image/icons/procure.svg';
import img_academic_software from '@/assets/image/icons/academic_software.svg';
import img_student_syllabus_shop from '@/assets/image/icons/student_syllabus_shop.svg';
import img_student_syllabus_info from '@/assets/image/icons/student_syllabus_info.svg';
import img_mobility_online from '@/assets/image/icons/mobility_online.svg';
import img_go_abroad from '@/assets/image/icons/go_abroad.svg';
import img_mobility_feedback from '@/assets/image/icons/mobility_feedback.svg';
import img_desiderius from '@/assets/image/icons/desiderius.svg';
import img_student_restos from '@/assets/image/icons/student_restos.svg';
import img_financial_support from '@/assets/image/icons/financial_support.svg';
import img_mental_wellbeing from '@/assets/image/icons/mental_wellbeing.svg';
import img_culture from '@/assets/image/icons/culture.svg';
import img_sport_on_ehb from '@/assets/image/icons/sport_on_ehb.svg';
import img_teacher_mobility from '@/assets/image/icons/teacher_mobility.svg';
import img_jobs from '@/assets/image/icons/jobs.svg';
import img_office_365 from '@/assets/image/icons/office_365.svg';
import img_onedrive from '@/assets/image/icons/onedrive.svg';
import img_sharepoint_intranet from '@/assets/image/icons/sharepoint_intranet.svg'
import img_cisco_netspace from '@/assets/image/icons/cisco_netspace.svg';
import img_cisco_netlab from '@/assets/image/icons/cisco_netlab.svg';
import img_gdt_castor from '@/assets/image/icons/gdt_castor.svg';
import img_mm_castor from '@/assets/image/icons/mm_castor.svg';
import img_mobo from '@/assets/image/icons/mobo.svg';
import img_rental from '@/assets/image/icons/rental.svg';
import img_sound_library from '@/assets/image/icons/sound_library.svg';
import img_ritcs_insurance from '@/assets/image/icons/ritcs_insurance.svg';
import img_music_terminology from '@/assets/image/icons/music_terminology.svg';
import img_sequens from '@/assets/image/icons/sequens.svg';
import img_roomy_music from '@/assets/image/icons/roomy_music.svg';
import img_ehb_website from '@/assets/image/icons/ehb_website.svg';
import img_instagram from '@/assets/image/icons/instagram.svg';
import img_facebook from '@/assets/image/icons/facebook.svg';
import img_flickr from '@/assets/image/icons/flickr.svg';
import img_twitter from '@/assets/image/icons/twitter.svg';
import img_youtube from '@/assets/image/icons/youtube.svg';

export const available_links = {
	account_management: {
		label: 'Account & Password',
		imageUri: img_account_management,
		href: 'https://ehbits.atlassian.net/wiki/spaces/IT/pages/644284462/Account+en+wachtwoord'
	},
	help_and_info: {
		label: 'Help & Info',
		imageUri: img_help_and_info,
		href: 'https://ehbits.atlassian.net/wiki/spaces/IT/overview'
	},
	canvas: {
		label: 'Canvas',
		imageUri: img_canvas,
		href: 'https://canvas.ehb.be'
	},
	ms_teams: {
		label: 'Teams',
		imageUri: img_ms_teams,
		href: 'https://teams.microsoft.com/'
	},
	timetable_student: {
		label: 'Studentenrooster',
		imageUri: img_timetable_student,
		href: 'https://cloud.timeedit.net/ehb_be/web/timeedit/sso/sso_ehb_be?back=https%3A%2F%2Fcloud.timeedit.net%2Fehb_be%2Fweb%2Fstudent%2F'
	},
	timetable_employees: {
		label: 'Personeelsrooster',
		imageUri: img_timetable_employees,
		href: 'https://cloud.timeedit.net/ehb_be/web/timeedit/sso/sso_ehb_be?back=https%3A%2F%2Fcloud.timeedit.net%2Fehb_be%2Fweb%2Fstaff%2F'
	},
	library: {
		label: 'Bibliotheek',
		imageUri: img_library,
		href: 'https://biblio.vub.ac.be/iguanaehb/www.main.cls?surl=ehb'
	},
	language_learning: {
		label: 'Oefenplatform',
		imageUri: img_language_learning,
		href: 'https://taal.ehb.be'
	},
	ehbib_search: {
		label: 'EhBIB Search',
		imageUri: img_ehbib_search,
		href: 'https://search.ebscohost.com/login.aspx?authtype=sso&amp;custid=s3945784&amp;groupid=main&amp;profile=eds'
	},
	dictionaries: {
		label: 'Woordenboeken',
		imageUri: img_dictionaries,
		href: 'http://bibliotheek.ehb.be:2048/login?url=http://vowb.vandale.nl'
	},
	email: {
		label: 'Webmail',
		imageUri: img_email,
		href: 'https://outlook.com/owa/ehb.be'
	},
	surveys: {
		label: 'Enquêtes',
		imageUri: img_surveys,
		href: 'https://www.qdef.ehb.bluexsurvey.com/'
	},
	helpdesk: {
		label: 'Helpdesk',
		imageUri: img_helpdesk,
		href: 'https://helpdesk.ehb.be/'
	},
	ibamaflex: {
		label: 'iBaMaFlex',
		imageUri: img_ibamaflex,
		href: 'https://ibamaflex.ehb.be/'
	},
	onstage: {
		label: 'OnStage',
		imageUri: img_onstage,
		href: 'https://ehb-onstage.xebic.com/'
	},
	wooclap: {
		label: 'Wooclap',
		imageUri: img_wooclap,
		href: 'https://app.wooclap.com/api/auth/ehb.be/callback?redirectUrl=%2Fhome%2Finfo'
	},
	procure: {
		label: 'ProCure.web',
		imageUri: img_procure,
		href: 'https://procure.ehb.be/'
	},
	academic_software: {
		label: 'Academic Software',
		imageUri: img_academic_software,
		href: 'https://www.academicsoftware.eu'
	},
	student_syllabus_shop: {
		label: 'Cursusdienst Webshop',
		imageUri: img_student_syllabus_shop,
		href: 'https://ehb.standaardstudentshop.be/Login'
	},
	student_syllabus_info: {
		label: 'Cursusdienst Info',
		imageUri: img_student_syllabus_info,
		href: 'https://ehb.sharepoint.com/sites/dan/intranet/cursusdienst/SitePages/Introductiepagina.aspx'
	},
	mobility_online: {
		label: 'Mobility Online',
		imageUri: img_mobility_online,
		href: 'https://www.service4mobility.com/europe/SOPCheckCASServlet?sprache=en&amp;identifier=BRUSSEL46'
	},
	go_abroad: {
		label: 'Go Abroad',
		imageUri: img_go_abroad,
		href: 'https://ehb.instructure.com/courses/4176'
	},
	mobility_feedback: {
		label: 'Feedback Mobiliteit',
		imageUri: img_mobility_feedback,
		href: 'http://desiderius.ehb.be/index.php?application=Ehb\\Application\\Mobility'
	},
	desiderius: {
		label: 'Desiderius',
		imageUri: img_desiderius,
		href: 'https://desiderius.ehb.be'
	},
	student_restos: {
		label: 'Studentenresto\'s',
		imageUri: img_student_restos,
		href: 'https://www.erasmushogeschool.be/nl/studentenrestos'
	},
	financial_support: {
		label: 'Financiële steun',
		imageUri: img_financial_support,
		href: 'https://www.erasmushogeschool.be/nl/financiele-steun'
	},
	mental_wellbeing: {
		label: 'Mentaal Welzijn',
		imageUri: img_mental_wellbeing,
		href: 'https://www.erasmushogeschool.be/stuvo/psychologisch-advies'
	},
	culture: {
		label: 'Cultuur',
		imageUri: img_culture,
		href: 'https://www.erasmushogeschool.be/nl/begeleiden/stuvo/cultuur'
	},
	sport_on_ehb: {
		label: 'Sport op EhB',
		imageUri: img_sport_on_ehb,
		href: 'https://www.erasmushogeschool.be/nl/stuvo/sport'
	},
	teacher_mobility: {
		label: 'Docenten Mobiliteit',
		imageUri: img_teacher_mobility,
		href: 'https://ehb.sharepoint.com/sites/kompas/kerntaken/internationalisering/mobiliteit/Leerpad%20Staf%20en%20Docentenmobiliteit/Introductiepagina.aspx'
	},
	jobs: {
		label: 'Vacatures',
		imageUri: img_jobs,
		href: 'https://ehb.jobteaser.com'
	},
	office_365: {
		label: 'Office 365',
		imageUri: img_office_365,
		href: 'https://ehbits.atlassian.net/wiki/spaces/IT/pages/651362305/Office+365'
	},
	onedrive: {
		label: 'OneDrive',
		imageUri: img_onedrive,
		href: 'https://ehb-my.sharepoint.com/'
	},
	sharepoint_intranet: {
		label: 'SharePoint/Intranet',
		imageUri: img_sharepoint_intranet,
		href: 'https://ehb.sharepoint.com/sites/IP-EHB-INTRANET'
	},
	cisco_netspace: {
		label: 'Cisco NetSpace',
		imageUri: img_cisco_netspace,
		href: 'http://www.netacad.com'
	},
	cisco_netlab: {
		label: 'Cisco NetLab',
		imageUri: img_cisco_netlab,
		href: 'http://netlab.ehb.be'
	},
	gdt_castor: {
		label: 'GDT Castor',
		imageUri: img_gdt_castor,
		href: 'http://gdt.castor.ehb.be/'
	},
	mm_castor: {
		label: 'M&M Castor',
		imageUri: img_mm_castor,
		href: 'https://mm.castor.ehb.be'
	},
	mobo: {
		label: 'RITCS MoBo Mediatheek',
		imageUri: img_mobo,
		href: 'https://mobo.ritcs.be/'
	},
	rental: {
		label: 'RITCS Uitleendienst',
		imageUri: img_rental,
		href: 'https://rental.ritcs.be'
	},
	sound_library: {
		label: 'Sound Library',
		imageUri: img_sound_library,
		href: 'https://apps.ritcs.be/u/datastore_catalog/soundlibrary/search'
	},
	ritcs_insurance: {
		label: 'RITCS Persoonsverzekeringen',
		imageUri: img_ritcs_insurance,
		href: 'https://apps.ritcs.be/user_old#/person_insurance'
	},
	music_terminology: {
		label: 'KCB Music Terminology',
		imageUri: img_music_terminology,
		href: 'https://keesvanhage.wordpress.com/muziektermen'
	},
	sequens: {
		label: 'KCB Sequens',
		imageUri: img_sequens,
		href: 'http://sequens.kcb.be/'
	},
	roomy_music: {
		label: 'KCB Kamermuziek',
		imageUri: img_roomy_music,
		href: 'http://kamermuziek.kcb.be'
	},
	ehb_website: {
		label: 'EhB Website',
		imageUri: img_ehb_website,
		href: 'http://www.ehb.be'
	},
	instagram: {
		label: 'Instagram',
		imageUri: img_instagram,
		href: 'https://www.instagram.com/erasmushogeschool'
	},
	facebook: {
		label: 'Facebook',
		imageUri: img_facebook,
		href: 'https://www.facebook.com/erasmushogeschool'
	},
	flickr: {
		label: 'Flickr',
		imageUri: img_flickr,
		href: 'https://www.flickr.com/photos/erasmushogeschool'
	},
	twitter: {
		label: 'Twitter',
		imageUri: img_twitter,
		href: 'https://www.twitter.com/ehbrussel'
	},
	youtube: {
		label: 'YouTube',
		imageUri: img_youtube,
		href: 'https://www.youtube.com/user/ehbrussel'
	}
}
