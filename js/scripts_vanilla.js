window.onload = function() {
	
	//============== AOS ==================
	AOS.init();
	
	//======== Initalize validator =========
	var validator = new Validator();
	validator.init(document.getElementById('contact-form-main'));

	//============== <skills> ==============
	const mySkillset = ['HTML 5', 'CSS 3','Javascript', 'jQuery', 'Bootstrap', 'Materialize', 'SASS', 'SQL', 'C#', 'Phyton', 'Ruby', 'PHP'];
	var ulElement = document.getElementById('skillset');

	function appendSkillsetElement(elSkil) {
		var liElement = document.createElement('li');
		liElement.innerHTML = elSkil;
		ulElement.appendChild(liElement);
	}

	mySkillset.forEach(element => appendSkillsetElement(element));
	//============= </skills> ===============

	//============  <projects> ===============
	const myProjects = [
		{
			id: 1,
		    title:   "Sports School",
		    description: "The Sports School was established with the vision to integrate sports and education to encourage young sports enthusiasts and support professional athletes. Established In 2011, The Sports School is the only institution in Serbia that integrates sports and education to create the perfect training ground for champions of tomorrow. They offer an educational curriculum that has academics built around sports.",
		    image: "images/project_sport.jpg",
		    link: "https://skolasportalavovi.000webhostapp.com/",
		    skills: ['PHP', 'Javascript']
		},
		{
			id: 2,
		    title:   "Prestige Computer Solutions",
		    description: "Prestige Computer Solutions is the leading online store offering IT products, services and solutions to corporate and institutional customers in Serbia. They are committed to being a globally diverse and inclusive company. They treat all people fairly, recognize individuality, promote based on performance and encourage everyone to reach their full potential.",
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
		    description: "Devon Davenport is a fashion designer from Raleigh, North Carolina with ambitions to catalyze the evolution of the men’s blazer through aesthetic and functional innovation. After graduating with a degree in biochemistry and moving to New York city to begin a career in high-throughput automated genomic sequencing...",
		    image: "images/project_blazer.jpg",
		    link: "https://nebojsa-glavinic.github.io/portfolio_school/#projects",
		    skills: ['PHP', 'jQuery', 'Phyton', 'SQL']
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

	// Loading all projects at once
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

	//=============== </project> ==============
	
	
	//=============== <social> ================
	
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
			link: "rss.xml",
			class: "fa-rss"
		},
		{
			link: "sitemap.xml",
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
	
	//============ </social> ===============

	//=========== <submit> =================
	document.getElementById("submit_email").addEventListener("click", function(event) {
		event.preventDefault();
	
		if (validator.isValid()) {
			document.getElementById("contact").innerHTML = "<h2>Thank you on your email, I'll make sure I get back to you as soon as possible</h2>";
		}
	});
	//=========== </submit> =================
};

//================ <form> ==================
var Validator = function() {};

Validator.prototype.validate = function(value, rules) {
    var self = this;
    return rules.every(function(rule) {
        return self[rule](value);
    });
};
//fullName
Validator.prototype.isString = function(value) {
    return value && /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,19})+$/.test(value);
};
//message
Validator.prototype.isNotEmpty = function(value) {
    var numberOfSpaces = _message.value.replace(/[^\s]/mg, "").length;
    var numberOfChars = _message.value.length - numberOfSpaces;
    //console.log('--->', value);
    if (numberOfChars<15){
        return false;
    }
    return value;
};
//phoneNumber
Validator.prototype.isInt = function(value) {
    return value && /^\+381\s[1-9][0-9]\s[0-9]{3}\s[0-9]{3,4}$/.test(value);
};

//email
Validator.prototype.isEmail = function(value) {
    return value && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
};

Validator.prototype.validateMyWork = function(value) {
    return value != "How do you like my work?";
};

Validator.prototype.errorField = function(field) {
    field.style.border = "thin solid darkred";
    if (document.getElementById(field.id + '-error-message')){
		document.getElementById(field.id + '-error-message').innerHTML = field.getAttribute('data-message')
		document.getElementById(field.id + '-example-message').style.display="block";
	}

	else console.log('---->', field.id);
};

Validator.prototype.nonErrorField = function(field) {
    field.style.border = "";
    if (document.getElementById(field.id + '-error-message')){
		document.getElementById(field.id + '-error-message').innerHTML = '';
		document.getElementById(field.id + '-example-message').style.display="none";
	}	
    else console.log('---->', field.id);
};

Validator.prototype.init = function(form) {
    var obj = this;
    obj._form = form;
    obj._selector = form.querySelectorAll( 'input[type="text"], input[type="email"], input[type="hidden"], input[type="radio"], input[type="checkbox"], select, textarea' );
    obj._formElements = {};

    [].forEach.call(obj._selector, function( element ) { 
        obj._formElements[element.id] = {'id': element.id, 'valid': false};

        element.addEventListener("blur", function(event) {
            if (obj.validate(element.value, [ element.getAttribute('data-validator') ] )) {
                obj._formElements[element.id]['valid'] = true;
                obj.nonErrorField(element);
            } else {
                obj._formElements[element.id]['valid'] = false;
                obj.errorField(element);
            }
        }); 
    } );
};

Validator.prototype._validate = function(form) {
    var obj = this;
    [].forEach.call(obj._selector, function( element ) { 
        obj._formElements[element.id] = {'id': element.id, 'valid': false};

         if (obj.validate(element.value, [element.getAttribute('data-validator')])) {
            obj._formElements[element.id]['valid'] = true;
            obj.nonErrorField(element);
        } else {
            obj._formElements[element.id]['valid'] = false;
            obj.errorField(element);
        }
    } );
};

Validator.prototype.isValid = function() {
    var obj = this;

    obj._validate();
    
    for (const [key, value] of Object.entries(obj._formElements)) {
        if (!value['valid'])
            return false;
    }

    return true;
};

//=============== </form> ===============