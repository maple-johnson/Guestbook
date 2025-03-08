export function validateForm(data) {
    const errors = [];

    // First Name Validation
    if (!data.fname || data.fname.trim() === "")
    {
        errors.push("First Name is required.");
    }
    // Last Name Validation
    if (!data.lname || data.lname.trim() === "")
    {
        errors.push("Last Name is required.");
    }
    // Job Title Validation
    if (!data.jtitle || data.jtitle.trim() === "")
    {
        errors.push("Job Title is required. \'Student\' is an acceptable job title.");
    }
    // Company Validation
    if (!data.company || data.jtitle.trim() === "")
    {
        errors.push("Company name is required. If a student, a school name is acceptable.");
    }
    // LinkedIn Validation
    if (!data.linkedin || data.linkedin.trim() === "")
    {
        // Allowed empty for those that don't have a LinkedIn
    }
    else if (data.linkedin.indexOf(".") === -1)
    {
        errors.push("Not a website. Please use a LinkedIn address or leave blank.");
    }
    else if (data.linkedin.indexOf("www.linkedin.com") === -1)
    {
        errors.push("Incorrect website. Please provide a LinkedIn address or leave blank.");
    }
    // Email Validation
    if (!data.email || data.email.trim() === "" || data.email.indexOf("@") === -1 || data.email.indexOf(".") ===  -1)
    {
        errors.push("An email is required and must be valid");
    }
    // How We Met Validation
    if (!data.howmet)
    {
        // Allowed empty for those using the 'Other' option
    }
    else
    {
        const validOptions = ["meetup", "job-fair", "school", "work", "none"];
        if (!validOptions.includes(data.howmet))
        {
            errors.push("Spoofer no spoofing!");
        }
    }
    // Other Validation
        // Allowed empty for those using 'How We Met'. Any text entry valid.
    // Message Validation
        // Allowed empty for those who don't have a message to post. Any text entry valid.
    // Mail List Validation
    if (!data.maillist === "on" || !data.maillist === null)
    {
        errors.push("Spoofer no spoofing!");
    }
    // Email Format Validation
    if (!data.format === "html" || !data.format === "text" || !data.format === null)
    {
        errors.push("Spoofer no spoofing!");
    }

    return {
        isValid: errors.length === 0,
        errors
    }

};