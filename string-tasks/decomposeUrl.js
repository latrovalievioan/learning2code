function decomposeUrl(url) {
  const result = {};
  //protocol
  const protocolRegex = /^.*:\/\//;
  if (protocolRegex.test(url)) {
    result.protocol = url.match(protocolRegex)[0].replace(/:\/\//, "");
  } else {
    result.protocol = url.match(protocolRegex);
  }
  //the ifs are there because i need to return the index 0 if it matches,
  //if it doesn't match i can't get index 0 of null
  //ip
  const ipRegex = /\d+\.\d+\.\d+\.\d+/;
  if (ipRegex.test(url)) {
    result.ipAdress = url.match(ipRegex)[0];
  } else {
    result.ipAdress = url.match(ipRegex);
  }
  //subDomain
  const subdomainAndDomainRegex = /\/\/[a-z]+?\.[a-z]+?\.[a-z]+/;
  if (subdomainAndDomainRegex.test(url)) {
    result.subDomain = url
      .match(subdomainAndDomainRegex)[0]
      .replace(/\//g, "")
      .split(".")[0];
  } else {
    result.subDomain = url.match(subdomainAndDomainRegex);
  }
  //Domain
  const domainRegex = /\/\/[a-z]+\.*.[a-z]+?\.[a-z]+/;
  if (domainRegex.test(url)) {
    result.domainName = url
      .match(domainRegex)[0]
      .replace(/\//g, "")
      .split(".")
      .slice(url.match(domainRegex)[0].replace(/\//g, "").split(".").length - 2)
      .join(".");
  } else {
    result.domainName = url.match(domainRegex);
  }

  //folderTree
  const folderTreeRegex = /\/[^.]+\//g;
  if (folderTreeRegex.test(url)) {
    result.folderTree = url
      .match(folderTreeRegex)[0]
      .split("/")
      .filter((el) => el); //remove empty strings
  } else {
    result.folderTree = url.match(folderTreeRegex);
  }
  //file and arguments
  const fileArgumentsRegex = /\/[^\/]+$/;
  if (fileArgumentsRegex.test(url)) {
    result.targetFile = url
      .match(fileArgumentsRegex)[0]
      .replace("/", "")
      .split("?")[0];
    if (url.match(fileArgumentsRegex)[0].split("?").length > 1) {
      result.argumentsFile =
        "?" + url.match(fileArgumentsRegex)[0].replace("/", "").split("?")[1];
    } else {
      result.argumentsFile = null;
    }
  } else {
    result.targetFile = url.match(fileArgumentsRegex);
  }
  if (result.targetFile === null) {
    result.argumentsFile = null;
  }
  return result;
}

console.log(decomposeUrl("filesLocal://jsfiddle.net/r5dq22dc/99/"));
