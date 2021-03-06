#!/usr/bin/env python3

#
# py4web app, AI-biorex ported 21.10.2020 15:51:33
#

import os
from py4web import action, request, abort, redirect, URL, Field
from yatl.helpers import A
from py4web.utils.form import Form, FormStyleBulma
from py4web.utils.grid import Grid
from py4web.utils.publisher import Publisher, ALLOW_ALL_POLICY
from pydal.validators import IS_NOT_EMPTY, IS_INT_IN_RANGE, IS_IN_SET, IS_IN_DB
from yatl.helpers import INPUT, H1, HTML, BODY, A
from py4web.core import Template, Reloader

from .common import db, session, T, cache, authenticated, unauthenticated, auth
import bottle

# exposes services necessary to access the db.thing via ajax
publisher = Publisher(db, policy=ALLOW_ALL_POLICY)

Glb= {'debug': True , 'my_app_name' : "bulmaadmin", 'tte_path': '/static/tte' }



@action('forms', method=["GET", "POST"] )
@action.uses(Template('forms.html', delimiters='[%[ ]]',), db, session,  T, )

def forms(id=None):
    ctrl_info= "ctrl: forms, view: forms.html"
    messages = []

    return locals()


@action('index', method=["GET", "POST"] )
@action.uses(Template('index.html', delimiters='[%[ ]]',), db, session,  T, )

def index(id=None):
    ctrl_info= "ctrl: index, view: index.html"
    messages = []

    return locals()


@action('tables', method=["GET", "POST"] )
@action.uses(Template('tables.html', delimiters='[%[ ]]',), db, session,  T, )

def tables(id=None):
    ctrl_info= "ctrl: tables, view: tables.html"
    messages = []

    return locals()


@action('additional', method=["GET", "POST"] )
@action.uses(Template('additional.html', delimiters='[%[ ]]',), db, session,  T, )

def additional(id=None):
    ctrl_info= "ctrl: additional, view: additional.html"
    messages = []

    return locals()


@action('uiXelements', method=["GET", "POST"] )
@action.uses(Template('ui-elements.html', delimiters='[%[ ]]',), db, session,  T, )

def uiXelements(id=None):
    ctrl_info= "ctrl: uiXelements, view: ui-elements.html"
    messages = []

    return locals()


@action('presentations', method=["GET", "POST"] )
@action.uses(Template('presentations.html', delimiters='[%[ ]]',), db, session,  T, )

def presentations(id=None):
    ctrl_info= "ctrl: presentations, view: presentations.html"
    messages = []

    return locals()


from pydal.restapi import RestAPI, Policy

policy = Policy()

policy.set('*', 'GET', authorize=True, allowed_patterns=['*'])
policy.set('*', 'PUT', authorize=True)
policy.set('*', 'POST', authorize=True)
policy.set('*', 'DELETE', authorize=True)

@action('api/<tablename>/', method=["GET", "POST", "PUT", "DELETE"])
@action('api/<tablename>/<rec_id>', method=["GET", "POST", "PUT", "DELETE"])
def api(tablename, rec_id=None):
    return RestAPI(db, policy)(request.method,
                               tablename,
                               rec_id,
                               request.GET,
                               request.POST
                               )
# 
# curl -X  GET   http://localhost:8000/bulmaadmin/api/test_table/
# curl -X  GET   http://localhost:8000/bulmaadmin/api/test_table/9
# curl -X DELETE  http://localhost:8000/bulmaadmin/api/test_table/2
# curl -X POST -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/bulmaadmin/api/test_table/
# curl -X PUT -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/bulmaadmin/api/test_table/9
# curl -X POST -d f0=1111111   -d f1=2222222222 -d f2=8888888888  http://localhost:8000/bulmaadmin/api/test_table/
#
#  pip install httpie
#  http         localhost:8000/bulmaadmin/api/test_table/
#  http         localhost:8000/bulmaadmin/api/test_table/9
#  http -f POST localhost:8000/bulmaadmin/api/test_table/ f0=111111 f1=2222222 f2=333333
#  http -f DELETE localhost:8000/bulmaadmin/api/test_table/2
#  http -f PUT localhost:8000/bulmaadmin/api/test_table/2 f0=111111 f1=2222222 f2=333333

