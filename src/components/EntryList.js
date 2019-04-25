window.EntryList = {
  view() {
    return m('.entry-list', [
      m('h1', 'All Entries'), //creates virtual dom els; here an h1 tag with All Entries as innerText

      m('a[href=/entries/new]', {oncreate: m.route.link}, 'Add New Entry'),
      Entry.all().map(entryView) //support of arrays of children
    ])
  }
};

function entryView(entry) {
  const date = new Date(entry.enteredAt);

  return m('.entry', [
    m('label', 'Entered at: ', date.toString()),
    m('ul', entry.volunteers.map(volunteerView))
  ])
}

function volunteerView(volunteer) {
  return m('li.volunteer', [
    m('label', volunteer.name),
    m('label', "(" + volunteer.email + ")")
  ])
}
