window.onload = function() {

	
	//Menu

	const menuLinks = [
		{
			link: "#about",
			title: "About"
		},
		{
			link: "#experience",
			title: "Experience"
		},
		{
			link: "#education",
			title: "Education"
		},
		{
			link: "#projects",
			title: "Projects"
		},
		{
			link: "#skills",
			title: "Skills"
		},
		{
			link: "#contact",
			title: "Contact"
		},
	]; 
	function addMenuLink(menuLink) {
        var liPlacehoder = document.createElement('li');
        var linkPlaceholder = document.createElement('a');
        linkPlaceholder.innerHTML = menuLink.title;
        linkPlaceholder.href = menuLink.link;

        liPlacehoder.appendChild(linkPlaceholder);
		document.getElementById('menu').appendChild(liPlacehoder);
	};
	menuLinks.forEach(element=>addMenuLink(element));


	
	//Form
	function validateEmail(inEmail) {
		if (inEmail.value && /(^\w.*@\w+\.\w)/.test(inEmail.value)) {
			nonErrorField(inEmail);
			return true;
		}
		errorField(inEmail);
		return false;
	};

	function validateTextLength(inText, minLength) {
		if (inText.value.length > minLength) {
			nonErrorField(inText);
			return true;
		}
		errorField(inText);
		return false;
	}

	function errorField(inField) {
		inField.style.border = "thick solid red";
		document.getElementById(inField.id + '-error-message').innerHTML = inField.getAttribute('data-message');
	}

	function nonErrorField(inField) {
		inField.style.border = "";
		document.getElementById(inField.id + '-error-message').innerHTML = '';
	}

	document.getElementById("_replyto").addEventListener("blur", function(event) {
		event.preventDefault();
		validateEmail(document.getElementById('_replyto'));
	});

	document.getElementById("_message").addEventListener("blur", function(event) {
		event.preventDefault();
		validateTextLength(this, 10);
	});

	document.getElementById("submit_email").addEventListener("click", function(event){
		event.preventDefault();

		var validEmail = false, validText = false;

		var elReplyEmail = document.getElementById('_replyto');
		const replyEmail = elReplyEmail.value;

		var elMessage = document.getElementById('_message');
		const emailMessage = elMessage.value;

		validEmail = validateEmail(elReplyEmail);
		validText = validateTextLength(elMessage, 20);

		if (validEmail && validText) {
			document.getElementById("contact").innerHTML = "<h2>Thank you on your email, I'll make sure I get back to you as soon as possible</h2>";
		}
	});


	//Skills
	
	const mySkillset = ['HTML 5', 'CSS 3','Javascript', 'JQuery', 'Bootstrap', 'Materialize', 'SASS', 'SQL', 'C#', 'Phyton', 'Ruby', 'PHP'];
	var ulElement = document.getElementById('skillset');

	function appendSkillsetElement(elSkil) {
		var liElement = document.createElement('li');
		liElement.innerHTML = elSkil;
		ulElement.appendChild(liElement);
	}

	mySkillset.forEach(element => appendSkillsetElement(element));

	//Projects

	const myProjects = [
		{
			id: 1,
		    title:   "Sports School",
		    description: "The Sports School was established with the vision to integrate sports and education to encourage young sports enthusiasts and support professional athletes. Established In 2011, The Sports School is the only institution in Serbia that integrates sports and education to create the perfect training ground for champions of tomorrow. The Sports School offers an educational curriculum that instead of just including sports, has academics built around sports.",
		    image: "images/project_sport.jpg",
		    link: "https://skolasportalavovi.000webhostapp.com/",
		    skills: ['PHP', 'Javascript']
		},
		{
			id: 2,
		    title:   "Prestige Computer Solutions",
		    description: "Prestige Computer Solutions is the leading online store offering IT products, services and solutions to corporate and institutional customers in Serbia.",
		    image: "images/project_computersolution.jpg",
		    link: "https://nebojsa-glavinic.github.io/PrestigeComputerSolutions/",
		    skills: ['PHP', 'Javascript', 'HTML 5']
		},
		{
			id: 3,
		    title:   "Johnnie Walker",
		    description: "Johnnie Walker is a brand of Scotch whisky now owned by Diageo that originated in the Scottish burgh of Kilmarnock in East Ayrshire. The brand was first established by grocer John Walker. It is the most widely distributed brand of blended Scotch whisky in the world, sold in almost every country.",
		    image: "images/project_walker.jpg",
		    link: "https://nebojsa-glavinic.github.io/portfolio_school/#projects",
		    skills: ['PHP', 'Javascript', 'Phyton', 'Bootstrap']
		},
		{
			id: 4,
		    title:   "Davenport Blazers",
		    description: "Devon Davenport is a fashion designer from Raleigh, North Carolina with ambitions to catalyze the evolution of the men’s blazer through aesthetic and functional innovation. After graduating from North Carolina State University with a degree in biochemistry and moving to New York city to begin a career in high-throughput automated genomic sequencing, devon realized the need to be comfortable, fashionable, and appropriate at all times in order to ensure access and entry to events, venues, and business meetings with little or late notice.",
		    image: "images/project_blazer.jpg",
		    link: "https://nebojsa-glavinic.github.io/portfolio_school/#projects",
		    skills: ['PHP', 'Javascript', 'Phyton', 'SQL']
		},
	];

	var projectsLoaded = 1;

	function addProject(dictProject) {
		var mainProjectDiv = document.createElement('div');
		mainProjectDiv.classList.add('project');
		mainProjectDiv.classList.add('shadow-large'); 
        var divProjectImage = document.createElement('div');
		divProjectImage.classList.add('project-image');
        var projectImage = document.createElement('img');
        projectImage.alt = "sports school";
        projectImage.src = dictProject['image'];
        divProjectImage.appendChild(projectImage);
        mainProjectDiv.appendChild(divProjectImage);

		var divProjectInfo = document.createElement('div');
		divProjectInfo.classList.add('project-info');
		var contTitle = document.createElement('h3');
		contTitle.innerHTML = dictProject['title'];
		var contDescription = document.createElement('p');
		contDescription.innerHTML = dictProject['description'];

		var spanLoad = document.createElement('span');
		spanLoad.classList.add('skills_used');
		spanLoad.style.cursor = "pointer";
		spanLoad.innerHTML = "Skills Used";

		var contLink = document.createElement('a');
		contLink.classList.add('view_project');
		contLink.href = dictProject['link'];
		contLink.innerHTML = 'View Project';
		divProjectInfo.appendChild(contTitle);
		divProjectInfo.appendChild(contDescription);
		divProjectInfo.appendChild(spanLoad);
		divProjectInfo.appendChild(contLink);

		var skillsDiv = document.createElement('div');
		skillsDiv.setAttribute('id', 'project_skills');
		var skillsUl = document.createElement('ul');
		skillsDiv.appendChild(skillsUl);
		divProjectInfo.appendChild(skillsDiv);


		mainProjectDiv.appendChild(divProjectInfo);

		
		var divLoad = document.getElementById('load_projects');

		spanLoad.onclick = function() {
			dictProject['skills'].forEach(function(element) {
				    var liElem = document.createElement('li');
			    liElem.innerHTML = element;
			    skillsUl.appendChild(liElem);
			});
			spanLoad.remove();
		};

        document.getElementById('list_projects').insertBefore(mainProjectDiv, divLoad);
	};

	// This is if we want to load all projects at once
	// myProjects.forEach(element => addProject(element));   

	addProject(myProjects[0]);
	document.getElementById("load_projects").onclick = function() {loadNewProject()};
	function loadNewProject() {
		if (myProjects[projectsLoaded]) {
			addProject(myProjects[projectsLoaded++]);
			if (!myProjects[projectsLoaded]) {
				document.getElementById("load_projects").remove();
			}
		} 
	};

	//Social

	const myLinks = [
		{
			link: "https://github.com/",
			class: "fa-github"
		},
		{
			link: "https://linkedin.com/",
			class: "fa-linkedin"
		},
		{
			link: "https://www.facebook.com/",
			class: "fa-facebook"
		},
		{
			link: "https://twitter.com/",
			class: "fa-twitter"
		},
		{
			link: "https://stackoverflow.com/",
			class: "fa-stack-overflow"
		},
		{
			link: "#",
			class: "fa-rss"
		},
		{
			link: "#",
			class: "fa-sitemap"
		},
	];


    function createLink(dictLink) {
    	var liPlacehoder = document.createElement('li');
    	var linkPlaceholder = document.createElement('a');
    	linkPlaceholder.href = dictLink.link;
    	linkPlaceholder.target = "_blank";
    	var icon = document.createElement("i");
    	icon.classList.add("fa");
    	icon.classList.add(dictLink['class']);
    	icon.setAttribute('aria-hidden', 'true');
    	linkPlaceholder.appendChild(icon);
    	liPlacehoder.appendChild(linkPlaceholder);

    	document.getElementById('social-nav').appendChild(liPlacehoder);
    };

	myLinks.forEach(element => createLink(element));
	


};


















	

	
	
