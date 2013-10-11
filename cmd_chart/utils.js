// Post to the provided URL with the specified parameters.
function directPost(path, parameters) {
    var form = $('<form></form>');

    form.attr("method", "post");
    form.attr("target", "_blank");
    form.attr("action", path);

    $.each(parameters, function(key, value) {
        var field = $('<input></input>');

        field.attr("type", "hidden");
        field.attr("name", key);
        field.attr("value", value);

        form.append(field);
    });

    // The form needs to be a part of the document in
    // order for us to be able to submit it.
    $(document.body).append(form);
    form.submit();

    form.remove();
}

function getMainUrlSearchParams() {
    var pairs = window.location.search.substring(1).split("&"),  obj = {}, pair, i;
    for (i in pairs) {
        pair = pairs[i].split("=");
        if (pair.length == 2) {
          var key = decodeURIComponent(pair[0]);
          var val = decodeURIComponent(pair[1]);
          if (key != "")
            obj[key] = val;
        }
    }
    return obj;
}

//first key of an object
function getFirstKey(obj) {
  for ( k in obj) {
    return k;
  }
  return null;
}